import React from 'react';
function Color() {
  return (
    <>
      <div className="color-pannel">
        {
          [5, 4, 3, 2, 1].map(i => (
            <div className={`color-primary-light-${i}`}>
              light-{i}
            </div>
          ))
        }
        <div className={`color-primary`}>
          primary
        </div>
        {
          [1, 2, 3, 4, 5].map(i => (
            <div className={`color-primary-dark-${i}`}>
              dark-{i}
            </div>
          ))
        }
      </div>
      <div className="color-pannel">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i => (
            <div className={`color-neutral-${i}`}>neutral-{i}</div>
          ))
        }
      </div>
      <div className="color-pannel">
        <div className="color-success">success</div>
        <div className="color-warning">warning</div>
        <div className="color-error">error</div>
      </div>
    </>
  );
}

export default Color;
