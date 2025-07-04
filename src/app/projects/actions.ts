import gsap from "gsap";

export const handleBack = (router: { push: (path: string) => void }) => {
  gsap.to("#page", {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      router.push("/projects?p=true");
    },
  });
};
