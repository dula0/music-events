import React from "react";

const useMediaQuery = (props: string) => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(props);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
  }, [matches, props]);

  return matches;
};

export default useMediaQuery;
