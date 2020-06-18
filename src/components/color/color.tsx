import React from 'react'
function Color() {
  return (
    <>
      <div className="color-panel">
        <div className="color-primary">primary</div>
        <div className="color-success">success</div>
        <div className="color-warning">warning</div>
        <div className="color-danger">error</div>
      </div>
      <div className="color-panel">
        {[5, 4, 3, 2, 1].map(i => (
          <div
            className={`color-primary-light-${i}`}
            key={`primary-light-${i}`}
          >
            light-{i}
          </div>
        ))}
        <div className={`color-primary`}>primary</div>
        {[1, 2, 3, 4, 5].map(i => (
          <div className={`color-primary-dark-${i}`} key={`primary-dark-${i}`}>
            dark-{i}
          </div>
        ))}
      </div>
      <div className="color-panel">
        {[5, 4, 3, 2, 1].map(i => (
          <div
            className={`color-success-light-${i}`}
            key={`success-light-${i}`}
          >
            light-{i}
          </div>
        ))}
        <div className={`color-success`}>success</div>
        {[1, 2, 3, 4, 5].map(i => (
          <div className={`color-success-dark-${i}`} key={`success-dark-${i}`}>
            dark-{i}
          </div>
        ))}
      </div>
      <div className="color-panel">
        {[5, 4, 3, 2, 1].map(i => (
          <div
            className={`color-warning-light-${i}`}
            key={`warning-light-${i}`}
          >
            light-{i}
          </div>
        ))}
        <div className={`color-warning`}>warning</div>
        {[1, 2, 3, 4, 5].map(i => (
          <div className={`color-warning-dark-${i}`} key={`warning-dark-${i}`}>
            dark-{i}
          </div>
        ))}
      </div>
      <div className="color-panel">
        {[5, 4, 3, 2, 1].map(i => (
          <div className={`color-danger-light-${i}`} key={`danger-light-${i}`}>
            light-{i}
          </div>
        ))}
        <div className={`color-danger`}>danger</div>
        {[1, 2, 3, 4, 5].map(i => (
          <div className={`color-danger-dark-${i}`} key={`danger-dark-${i}`}>
            dark-{i}
          </div>
        ))}
      </div>
      <div className="color-panel">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i => (
          <div className={`color-neutral-${i}`} key={`neutral-${i}`}>
            neutral-{i}
          </div>
        ))}
      </div>
    </>
  )
}

export default Color
