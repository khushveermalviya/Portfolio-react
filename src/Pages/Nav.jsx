import React from 'react'

function Nav() {
  return (
   <>
   <div className=" w-full h-30 flex justify-between">
      <h1 className="mt-5 transition duration-500 transform px-6 py-2 m-4 inline hover:text-white
               hover:opacity-50
               hover:shadow-md
               hover:w-20">  <img src="data:image/png;base64,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"></img>
    Github</h1>
    <h1 className="mt-5 transition duration-500 transform px-6 py-2 m-4 inline hover:text-white
               hover:opacity-50
               hover:shadow-md
               hover:w-20">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACR0lEQVR4nO2av2sUQRzFP/6IEFFjuiQWVqJFrBKE2FudaKW2Fjb2asAiCIY0Bhv9C2wl2AmCF8QgiCliJSJioSgoIjERE1Gz4StvYVnu5mY3e7lZnAcLd2++O/PezXxnZncOIiIiyuI00AR+AEmPr1VpaRQ1MR2A+KTNdbNIT9gN68AVYJjeYxi4Kk2Jb8/MK9hMhIZr0mbDrCNWFTxEeBiSthWf4HQshorEV99/YWQCeAh8Bj4BD4DRanV234jNZn9aTIdrwBg1MvJSvK0xB4F9mtONe1y93u4Z+S5+b4Y7IM7KamPkifgZYEAmboh7Xr3e7hmxPPjZIkdstR2nZrPWEeAe8B74WNdZKxQkWzXyzLEjXfCM6QMuAHPABw3LZc2Is8Cx7TDSaXvtE/O6Q/lv4DawezuMuHifH+EVcAk4DOwB9gMngbvAL8VY7u0M0Yit/hvAlEOg4QTwRXVMFtRXSnA7vl3MOeB85vsuR/unVMey1itfHaUEt+Ndjdi25g7wVTG26byloZXHI8VcDs2IbWuWMuV/M58Xgf5c/EWV3Q/NyHXxb4DjmpUsH96Jt0fYLI6KfxuakUXxZ3L8WfEvcvxAJk+CMvJN/GCOHxRv5VnsEL8RmhFX41tpz4lohNgjxKHlQswRYo4Qc8QFn4ejVpdvTJl6K10QFxyNPS0QU6beSo2EgsRX34oCQzhyy+NQkVe0TQXbmV1omCxy9NZQ8LoeeEboPUZkIn3L4n1MnR4X1Pp4OkVDXZgejtbyDwMRERH8wyblE3u1pGweRwAAAABJRU5ErkJggg=="></img>
    Linkdin </h1>
  
    </div>
   </>
  )
}

export default Nav