"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { displayShader, fluidShader, vertexShader } from "../../lib/Shaders";

const config = {
  brushSize: 15.0,
  brushStrength: 0.25,
  distortionAmount: 1.0,
  fluidDecay: 0.98,
  trailLength: 0.5,
  stopDecay: 0.85,
  color1: "#4e24df",
  color2: "#ff007b",
  color3: "#4e24df",
  color4: "#00e1ff",
  colorIntensity: 1.0, // brightness
  softness: 1.0,
  randomSeed: Math.random() * Date.now(),
  timeScale: 0.05, // simulation speed
  colorCycleSpeed: 0.2, // color cycling
  enableRandomness: true, // disable randomness
};

export const hexToRgb = (hex: string): [number, number, number] => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return [r, g, b];
};

export default function Background() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0, lastMoveTime: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;

    // Get the maximum possible viewport height (screen height)
    const maxHeight = Math.max(
      window.screen.height,
      window.innerHeight,
      document.documentElement.clientHeight,
      window.visualViewport?.height || 0
    );

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current = renderer;

    const width = window.innerWidth;
    const height = maxHeight;

    renderer.setSize(width, height);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.zIndex = "0";
    canvasRef.current.appendChild(renderer.domElement);

    // Create render targets
    const fluidTarget1 = new THREE.WebGLRenderTarget(width, height, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
    });
    const fluidTarget2 = new THREE.WebGLRenderTarget(width, height, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
    });

    let currentFluidTarget = fluidTarget1;
    let previousFluidTarget = fluidTarget2;
    let frameCount = 0;

    // Create materials
    const fluidMaterial = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new THREE.Vector2(width, height),
        },
        iMouse: { value: new THREE.Vector4(0, 0, 0, 0) },
        iFrame: { value: 0 },
        iPreviousFrame: { value: null },
        uBrushSize: { value: config.brushSize },
        uBrushStrength: { value: config.brushStrength },
        uFluidDecay: { value: config.fluidDecay },
        uTrailLength: { value: config.trailLength },
        uStopDecay: { value: config.stopDecay },
      },
      vertexShader: vertexShader,
      fragmentShader: fluidShader,
    });

    const displayMaterial = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new THREE.Vector2(width, height),
        },
        iFluid: { value: null },
        uDistortionAmount: { value: config.distortionAmount },
        uColor1: { value: new THREE.Vector3(...hexToRgb(config.color1)) },
        uColor2: { value: new THREE.Vector3(...hexToRgb(config.color2)) },
        uColor3: { value: new THREE.Vector3(...hexToRgb(config.color3)) },
        uColor4: { value: new THREE.Vector3(...hexToRgb(config.color4)) },
        uColorIntensity: { value: config.colorIntensity },
        uSoftness: { value: config.softness },
        uRandomSeed: { value: Math.random() * 1000 }, // Add random seed
      },
      vertexShader: vertexShader,
      fragmentShader: displayShader,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const fluidPlane = new THREE.Mesh(geometry, fluidMaterial);
    const displayPlane = new THREE.Mesh(geometry, displayMaterial);

    scene.add(fluidPlane);
    scene.add(displayPlane);

    // Test render to see if canvas is working
    renderer.setRenderTarget(null);
    renderer.render(displayPlane, camera);

    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;

      mouseRef.current.prevX = mouseRef.current.x;
      mouseRef.current.prevY = mouseRef.current.y;
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = rect.height - (e.clientY - rect.top);
      mouseRef.current.lastMoveTime = performance.now();

      fluidMaterial.uniforms.iMouse.value.set(
        mouseRef.current.x,
        mouseRef.current.y,
        mouseRef.current.prevX,
        mouseRef.current.prevY
      );
    };

    const handleMouseLeave = () => {
      fluidMaterial.uniforms.iMouse.value.set(0, 0, 0, 0);
    };

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      const time = performance.now() * 0.001 * config.timeScale;
      fluidMaterial.uniforms.iTime.value = time;
      displayMaterial.uniforms.iTime.value = time;
      fluidMaterial.uniforms.iFrame.value = frameCount;

      if (performance.now() - mouseRef.current.lastMoveTime > 100) {
        fluidMaterial.uniforms.iMouse.value.set(0, 0, 0, 0);
      }

      fluidMaterial.uniforms.uBrushSize.value = config.brushSize;
      fluidMaterial.uniforms.uBrushStrength.value = config.brushStrength;
      fluidMaterial.uniforms.uFluidDecay.value = config.fluidDecay;
      fluidMaterial.uniforms.uTrailLength.value = config.trailLength;
      fluidMaterial.uniforms.uStopDecay.value = config.stopDecay;

      displayMaterial.uniforms.uDistortionAmount.value =
        config.distortionAmount;
      displayMaterial.uniforms.uColorIntensity.value = config.colorIntensity;

      // Only apply randomness if enabled
      if (config.enableRandomness) {
        displayMaterial.uniforms.uRandomSeed.value =
          config.randomSeed + Math.sin(time * config.colorCycleSpeed) * 0.02;
      } else {
        displayMaterial.uniforms.uRandomSeed.value = config.randomSeed;
      }

      displayMaterial.uniforms.uColor1.value.set(...hexToRgb(config.color1));
      displayMaterial.uniforms.uColor2.value.set(...hexToRgb(config.color2));
      displayMaterial.uniforms.uColor3.value.set(...hexToRgb(config.color3));
      displayMaterial.uniforms.uColor4.value.set(...hexToRgb(config.color4));
      displayMaterial.uniforms.uSoftness.value = config.softness;

      fluidMaterial.uniforms.iPreviousFrame.value = previousFluidTarget.texture;
      renderer.setRenderTarget(currentFluidTarget);
      renderer.render(fluidPlane, camera);

      displayMaterial.uniforms.iFluid.value = currentFluidTarget.texture;
      renderer.setRenderTarget(null);
      renderer.render(displayPlane, camera);

      const temp = currentFluidTarget;
      currentFluidTarget = previousFluidTarget;
      previousFluidTarget = temp;

      frameCount++;
    };

    animate();

    // Add event listeners (only mouse events, no resize)
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }

      if (canvasRef.current && rendererRef.current?.domElement) {
        canvasRef.current.removeChild(rendererRef.current.domElement);
      }

      // Dispose of materials and geometries
      fluidMaterial.dispose();
      displayMaterial.dispose();
      geometry.dispose();

      // Dispose of render targets
      fluidTarget1.dispose();
      fluidTarget2.dispose();
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      id="gradient-canvas"
      className="absolute w-screen h-screen overflow-hidden -z-10"
    />
  );
}
