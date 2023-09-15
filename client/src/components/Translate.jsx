import { useEffect, useState, useRef } from 'react';
import { useSpring, animated, config } from 'react-spring';
import PropTypes from 'prop-types';

export default function Animation({
  fromX,
  fromY,
  fromZ,
  toX,
  toY,
  toZ,
  children,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  // Define animation properties based on visibility and coordinates
  const animation = useSpring({
    opacity: isVisible ? 1 : 0,

    transform: isVisible
      ? `translate3d(${toX}px, ${toY}px, ${toZ}px)`
      : `translate3d(${fromX}px, ${fromY}px, ${fromZ}px)`,
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
  toX: 0,
  toY: 0,
  toZ: 0,
  fromX: 0,
  fromY: 0,
  fromZ: 0
}

Animation.propTypes = {
  fromX: PropTypes.number.isRequired,
  fromY: PropTypes.number.isRequired,
  fromZ: PropTypes.number.isRequired,
  toX: PropTypes.number.isRequired,
  toY: PropTypes.number.isRequired,
  toZ: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
