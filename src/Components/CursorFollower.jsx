import React, { useState, useEffect } from 'react';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateFollowerPosition = () => {
      // Calculate the position of the follower relative to the cursor
      const deltaX = position.x - followerPosition.x;
      const deltaY = position.y - followerPosition.y;

      // Update the follower position with some smoothing effect
      setFollowerPosition({
        x: followerPosition.x + (deltaX / 10),
        y: followerPosition.y + (deltaY / 10)
      });
    };

    document.addEventListener('mousemove', updatePosition);
    requestAnimationFrame(updateFollowerPosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, [position, followerPosition]);

  return (
    <div>
      {/* Cursor */}
      <div className="cursor" style={{ left: position.x, top: position.y }} />
      {/* Follower */}
      <div className="follower" style={{ left: followerPosition.x, top: followerPosition.y }} />
    </div>
  );
};

export default CursorFollower;
