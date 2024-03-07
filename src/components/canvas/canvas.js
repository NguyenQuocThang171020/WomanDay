
import { useRef, useEffect} from 'react';
import './canvas.css'
const Canvas = () => {
    var canvasRef = useRef(null);
    var things = [];
    var canvas;
    var ctx;
    var thingsCount = 124;
    var mouse = {
        x: -100,
        y: -100
    };
    var minDist = 150;
    var image = new Image();
    useEffect(() => {
        canvas = canvasRef.current;
        ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // image.src = 'https://i.pinimg.com/originals/90/2c/2b/902c2bbccb72ca76cf3bbe95741174e9.png';
        image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Love_heart_uidaodjsdsew.gif/1200px-Love_heart_uidaodjsdsew.gif';
        // image.src = 'https://static.wixstatic.com/media/2cd43b_57438aebde5a4b0fa20c6880a9fafabf~mv2.png/v1/fill/w_320,h_272,fp_0.50_0.50/2cd43b_57438aebde5a4b0fa20c6880a9fafabf~mv2.png';
        for (var i = 0; i < thingsCount; i++) {
            let thingWidth = Math.floor(Math.random() * 20) + 20;
            let thingHeight = image.naturalHeight / image.naturalWidth * thingWidth;
            let speed = Math.floor(Math.random() * 2) + 0.5;
            things.push({
              width: thingWidth,
              height: thingHeight,
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height - thingHeight,
              speed: speed,
              vY: speed,
              vX: 0,
              d: Math.random() * 1.2 - 0.6,
              stepSize: (Math.random()) / 20,
              step: 0,
              angle: Math.random() * 180 - 90,
              rad: Math.floor(Math.random()),
              opacity: Math.random() + 0.4,
              _ratate: Math.floor(Math.random()) // ratate 正負
            });
          };
          canvas.addEventListener('mousemove', function(e){
            mouse.x = e.clientX;
            mouse.y = e.clientY;
          });
          tick();
    }, []);
    const drawThings = ()=> {
        things.map((thing) => {
          ctx.beginPath();
          thing.rad = (thing.angle * Math.PI) / 180;
          ctx.save();
          var cx = thing.x + thing.width / 2;
          var cy = thing.y + thing.height / 2;
          ctx.globalAlpha = thing.opacity;
          ctx.setTransform(
            Math.cos(thing.rad),
            Math.sin(thing.rad),
            -Math.sin(thing.rad),
            Math.cos(thing.rad),
            cx - cx * Math.cos(thing.rad) + cy * Math.sin(thing.rad),
            cy - cx * Math.sin(thing.rad) - cy * Math.cos(thing.rad)
          );
          ctx.drawImage(image, thing.x, thing.y, thing.width, thing.height);
          ctx.restore();
        });
      };
      
      const draw = ()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawThings();
      };
      const update = ()=> {
        things.map((thing) => {
          var dist = Math.sqrt((thing.x - mouse.x) ** 2 + (thing.y - mouse.y) ** 2);
          
          if (dist < minDist) {
            var force = minDist / (dist * dist),
                xcomp = (mouse.x - thing.x) / dist,
                ycomp = (mouse.y - thing.y) / dist,
                deltaV = force * 2; // deplay when hover mouse
      
            thing.vX -= deltaV * xcomp;
            thing.vY -= deltaV * ycomp;
            
            if (thing.d * xcomp > 0) {
              thing.d = 0 - thing.d;
            }
          } else {
            thing.vX *= .98;
      
            if (thing.vY < thing.speed) {
              thing.vY = thing.speed
            }
      
            thing.vX += Math.cos(thing.step += (Math.random() * 0.05)) * thing.stepSize;
          }
          
          thing.y += thing.vY;
          thing.x += thing.vX + thing.d;
          
          var _angle = Math.random() + 0.2;
          // stuff.angle += _angle;
          if (thing._ratate === 0) {
            thing.angle += _angle;
          } else {
            thing.angle -= _angle;
          }
          
          if (thing.y > canvas.height) {
            reset(thing);
          }
      
          if (thing.x > canvas.width || thing.x < (0 - thing.width)) {
            reset(thing);
          }
        });
      };

      function reset(thing) {
        thing.width = Math.floor(Math.random() * 20) + 20;
        thing.height = image.naturalHeight / image.naturalWidth * thing.width;
        thing.x = Math.floor(Math.random() * canvas.width);
        thing.y = 0 - thing.height;
        thing.speed = Math.floor(Math.random() * 2) + 0.5
        thing.vY = thing.speed;
        thing.vX = 0;
        thing._ratate = Math.floor(Math.random());
      }

      const tick = ()=> {
        draw();
        update();
        requestAnimationFrame(tick);
      }
    return (
        <canvas ref={canvasRef}></canvas>
    );
}
 
export default Canvas;