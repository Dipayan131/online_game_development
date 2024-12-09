export const data_new = {
      rise:{
        name: 'rise',
        animations: [
          {
            percent:0,
            opacity: 0,
            transform: 'translate(var(--translate), calc(var(--translate) + 100px))'
          },
          {
            percent:100,
            opacity: 1,
            transform: 'translate(var(--translate), calc(var(--translate) + 0px))'
          }
        ]
      },
      rotate_center:{
        name: 'rotate-center',
        animations: [
          {
            percent:0,
            transform: 'rotate(0)'
          },
          {
            percent:100,
            transform: 'rotate(360deg)'
          }
        ]
      },
      rotate_90_tr_ccw:{
        name: 'rotate-90-tr-ccw',
        animations: [
          {
            percent:0,
            transform: 'rotate(0)',
            'transform-origin': 'top right'
          },
          {
            percent:100,
            transform: 'rotate(-90deg)',
            'transform-origin': 'top right'
          }
        ]
      },    
      flip_vertical:{
        name: 'flip-vertical',
        animations: [
          {
            percent:0,
            transform: 'rotateY(0)'
          },
          {
            percent:100,
            opacity: 1,
            transform: 'rotateY(180deg)'
          }
        ]
      },
      focus_in_contract:{
        name: 'focus-in-contract',
        animations: [
          {
            percent:0,
            'letter-spacing': '1em',
            filter: 'blur(12px)',
            opacity: '0'
          },
          {
            percent:100,
            filter: 'blur(0)',
            opacity: '1'
          }
        ]
      },
      flip_diagonal_tr:{
        name: 'flip-diagonal-tr',
        animations: [
          {
            percent:0,
            transform: 'rotate3d(1,1,0,0deg)'
          },
          {
            percent:100,
            opacity: 1,
            transform: 'rotate3d(1,1,0,180deg)'
          }
        ]
      },
    heartIt:{
        name: 'heart-it',
        animations: [
          {
            percent:0,
            'stroke-opacity': 0,
            transform: 'translate(var(--translate), calc(var(--translate) + 100px))'
          },
          {
            percent:100,
            'stroke-opacity': 1,
            color: 'green',
            transform: 'translate(var(--translate), calc(var(--translate) + 0px))'
          }
        ]
      },
    heartbeat:{
        name: 'heartbeat',
        animations: [
          {
            percent:0,
            transform: 'translate(var(--translate), var(--translate)) scale(1)',
            'transform-origin': 'center center',
            'animation-timing-function': 'ease-out'
          },
          {
            percent:100,
            transform: 'translate(var(--translate), var(--translate)) scale(1)',
            'animation-timing-function': 'ease-out'
          }
        ]
      },
    scaleupbr:{
        name: 'scale-up-br',
        animations: [
          {
            percent:0,
            transform: 'translate(-50%, -50%) scale(0.5)',
            'transform-origin': '100% 100%'
          },
          {
            percent:100,
            transform: 'translate(-50%, -50%) scale(1)',
            'transform-origin': '100% 100%'
          }
        ]
      },
  };
  