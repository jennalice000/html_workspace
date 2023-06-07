class Mario extends GameObject {
    //주인공은 이미지를 둘러싼 wrapper
    //와 4개의 센서 막대도 잇어야 한다..
    //js에서 개발자가 생성자를 정의하지 않을 경우 
    //js 자체적으로 부모를 먼저 생성해준다..하지만 
    //개발자가 현재 클래스의 생성자를 정의할 경우 
    //개발자가 주도하는 것이기에, js에서 부모를 자동
    //생성해주지 않으므로,  개발자가 부모생성처리 까지
    //맡아야 한다..
    
    constructor(container, src, width, height, x, y, velX, velY) {
        super(container, src, width, height, x, y, velX, velY);

        //나에 대한 초기화 
        this.wrapper; //센서들을 감쌀 div
        this.sensorArray=new Array(4);
        
        this.wrapper=document.createElement("div");
        this.wrapper.style.width=this.width+"px";
        this.wrapper.style.height=this.height+"px";

        //바깥쪽 레퍼는 이미지를 포함하고 있어야 한다 
        //부모인 GameObject에서 img를 stage에 부착
        //했으나, 아래의 appendChild에 의해 부착대상이
        //wrapper로 변경됨(별도의 removeChild() 필요X )
        this.wrapper.appendChild(this.img);
        this.container.appendChild(this.wrapper);

        //실제적으로 움직이는 대상은 wrapper이므로, 
        //wrapper에 포지션이 적용되어야 함 
        this.wrapper.style.position="absolute";
        this.wrapper.style.left=this.x+"px";
        this.wrapper.style.top=this.y+"px";


        //좌측 센서 
        this.sensorArray[0] = new Sensor(this.wrapper, 1, 22, -1, ((this.height - 22)/2));
        //위쪽 센서
        this.sensorArray[1] = new Sensor(this.wrapper, 22, 1, ((this.width - 22)/2), -1)
        //우측 센서 
        this.sensorArray[2]= new Sensor(this.wrapper,1, 22, this.width, ((this.height - 22)/2));
        //아래 센서            
        this.sensorArray[3] = new Sensor(this.wrapper, 22, 1, ((this.width - 22)/2),this.height)
        

        
    }

    setSensor(){
        //모든 센서는 마리오의 x,y 를 기준으로 변경되어야 하니깐...
        this.sensorArray[0].x=this.x-1; //좌
        this.sensorArray[1].x=this.x+(this.width -22)/2;//위
        this.sensorArray[2].x=this.x+this.width;//우측
        this.sensorArray[3].x=this.x+(this.width - 22)/2;//아래

        this.sensorArray[0].y=this.y+(this.height - 22)/2; //좌
        this.sensorArray[1].y=this.y-1 //위
        this.sensorArray[2].y=this.y+(this.height - 22)/2;//우측
        this.sensorArray[3].y=this.y+this.height; //아래

    }

    //블럭과 마리오와 충돌체크
    hit2Check(){
        for(let i=0; i<brickArray.length;i++){ //모든 벽돌 수 만큼...
                
            //우측센서 충돌검사
            let result=collisionCheck(this, brickArray[i]);

            if(result){ //마주쳤다면..
                console.log(i , "번째 벽돌과 닿았어");

                //주인공의 x속도를 0으로 둔다 
                //[벽돌의 좌측에 닿으면]
                //현재 마주친 벽돌의 x 좌표보다, 주인공의 너비만큼
                //좌측으로 x위치를 설정...
                this.x=brickArray[i].x + brickArray[i].width+1;
                break;
                //[벽돌의 우측에 닿으면 ]
                //우측에 닿았을때는 현재 닿은 벽돌의 x의 좌표값에
                //벽돌의 width를 더한값을 주인공의 x위치로 설정


                //[벽돌의 위에 닿으면]
                //지금 닿은 벽돌의 y값에서 주인공의  height 만큼 
                //위로 올려서 주인공의 y값을 결정

                //[벽돌의 아래에 닿으면]
                //지금 닿은 벽돌의 y값에서 벽돌의 높이 만큼을 더한값을
                //주인공의 y값으로 설정 
            }  
        }

    }


    hitCheck(){
        for(let i=0; i<brickArray.length;i++){ //모든 벽돌 수 만큼...
                
            //우측센서 충돌검사
            let result=collisionCheck(this, brickArray[i]);

            if(result){ //마주쳤다면..
                console.log(i , "번째 벽돌과 닿았어");

                //주인공의 x속도를 0으로 둔다 
                //[벽돌의 좌측에 닿으면]
                //현재 마주친 벽돌의 x 좌표보다, 주인공의 너비만큼
                //좌측으로 x위치를 설정...
                this.x=brickArray[i].x - this.width;
                break;
                //[벽돌의 우측에 닿으면 ]
                //우측에 닿았을때는 현재 닿은 벽돌의 x의 좌표값에
                //벽돌의 width를 더한값을 주인공의 x위치로 설정


                //[벽돌의 위에 닿으면]
                //지금 닿은 벽돌의 y값에서 주인공의  height 만큼 
                //위로 올려서 주인공의 y값을 결정

                //[벽돌의 아래에 닿으면]
                //지금 닿은 벽돌의 y값에서 벽돌의 높이 만큼을 더한값을
                //주인공의 y값으로 설정 
            }  
        }

    }


    tick(){
        this.x+=this.velX;
        this.y+=this.velY;

        this.setSensor();

        this.hitCheck()
        this.hit2Check();

        // 마리오는 자신의 x가 변하면 본인이 보유한 센서의 위치값도 갱신시킬 의무가 있는 거다 
    }

    //부모인 GameObject의 메서드가 마리오에 적용하기
    //엔 무리가 있으므로, 부모의 메서드를 업그레이드하여
    //마리오의 상황에 맞게 코드를 변경한다.. 오버라이딩..
    render(){
        this.wrapper.style.left=this.x+"px";
        this.wrapper.style.top=this.y+"px";
    }    
}