class Mario extends GameObject{

    //부모인 GameObject 에게 물려받은 재산 중 
    //tick() 메서드는 현재 마리오 상황에 맞지 않는다.
    //이때 개발자는 부모에게 물려받은 메서드를 자기만의
    //코드로 업그레이드할 수 있는데, 이러한 메서드 정의
    //기법을 가리켜 오버라이딩(OverRiding...)
    tick(){
        this.velY+=g;
        //console.log(this.velY);
        
        if(this.velY>8){
            this.velY=8;
        }
        
        //벽돌 수 만큼 반복하면서 마리오와 각각의 벽돌간 충돌체크 
        for(let i=0;i<brickArray.length;i++){
            let result=collisionCheck(this , brickArray[i]);
            
            if(result){//i번째 벽돌과 마주쳤다면..
                //마주친 벽돌의 y축에서 마리오의 키(height)만큼을 위로
                //올려놓자 
                
            }
        }
        
        this.x+=this.velX;
        this.y+=this.velY;           
    }
}