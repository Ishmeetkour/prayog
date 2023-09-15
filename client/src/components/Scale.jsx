import { useEffect, useState, useRef } from 'react';
import { useSpring, animated, config } from 'react-spring';
import PropTypes from 'prop-types';

export default function Animation({
    fromScale,
    toScale,
    children,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  // Define animation properties based on visibility and coordinates
  const animation = useSpring({
    opacity: isVisible ? 1 : 0,

    transform: isVisible
    ? `scale(${toScale})`
    : `scale(${fromScale})`,
    config: config.wobbly, // You can adjust the animation config
  });

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false)
          }
        });
      },
      observerOptions
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    let currentRef = elementRef.current;

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <animated.div
      id="animate-me"
      className="animate-me"
      style={animation}
      ref={elementRef}
    >
      {children}
    </animated.div>
  );
}

Animation.defaultProps = {
  fromScale: 0,
  toScale: 0,
}

Animation.propTypes = {
  fromScale: PropTypes.number.isRequired,
  toScale: PropTypes.number.isRequired,
  
  children: PropTypes.node.isRequired,
};
