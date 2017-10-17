var x=0;

function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  colorMode(HSB,256);
  
  frameRate(70);
}

function draw() {
    x=frameCount % 512;
    if(x<=256){
    background(x, 64, 256);
    stroke(256);
    strokeWeight(5);
    r=20;
    
    for(var a=0; a<500; a+=100*sqrt(3)/2)
    {
      line(0,a,500,a);
    }
    
    for(var b=-500; b<500; b+=100)
    {
      line(b,0,b+500/sqrt(3),500);
    }
    
    for(var c=0; c<1000; c+=100)
    {
      line(c,0,c-500/sqrt(3),500);
    }
    
    strokeWeight(4);
    
    for(var e=0; e<500; e+=100*sqrt(3))
    {
      for(var d=-100; d<500; d+=100)
      {
        line(d+50,e+50*tan(30),d+0,e+0);
        line(d+50,e+50*tan(30),d+100,e+0);
        line(d+50,e+50*tan(30),d+50,e+100*sqrt(3)/2);
        
        line(d+100,e+100*sqrt(3)/2-50*tan(30),d+100,e+0);
        line(d+100,e+100*sqrt(3)/2-50*tan(30),d+50,e+100*sqrt(3)/2);  
        line(d+100,e+100*sqrt(3)/2-50*tan(30),d+150,e+100*sqrt(3)/2);
      }
    }
    
    for(var g=100*sqrt(3)/2; g<500; g+=100*sqrt(3))
    {
      for(var f=-50; f<500; f+=100)
      {
        line(f+50,g+50*tan(30),f+0,g+0);
        line(f+50,g+50*tan(30),f+100,g+0);
        line(f+50,g+50*tan(30),f+50,g+100*sqrt(3)/2);
        
        line(f+100,g+100*sqrt(3)/2-50*tan(30),f+100,g+0);
        line(f+100,g+100*sqrt(3)/2-50*tan(30),f+50,g+100*sqrt(3)/2);  
        line(f+100,g+100*sqrt(3)/2-50*tan(30),f+150,g+100*sqrt(3)/2);
      }
    }
    
    strokeWeight(5);
    fill(x, 64, 256);
    
    for(var i=0; i<=500; i+=100*sqrt(3))
    {
      for(var h=0; h<=500; h+=100)
      {
        ellipse(h,i,r);
        ellipse(h+50,i+100*sqrt(3)/2,r);
      }
    }
    }
    else
    {

    background(512-x, 64, 256);
    stroke(256);
    strokeWeight(5);
    r=20;
    
    for(var a=0; a<500; a+=100*sqrt(3)/2)
    {
      line(0,a,500,a);
    }
    
    for(var b=-500; b<500; b+=100)
    {
      line(b,0,b+500/sqrt(3),500);
    }
    
    for(var c=0; c<1000; c+=100)
    {
      line(c,0,c-500/sqrt(3),500);
    }
    
    strokeWeight(4);
    
    for(var e=0; e<500; e+=100*sqrt(3))
    {
      for(var d=-100; d<500; d+=100)
      {
        line(d+50,e+50*tan(30),d+0,e+0);
        line(d+50,e+50*tan(30),d+100,e+0);
        line(d+50,e+50*tan(30),d+50,e+100*sqrt(3)/2);
        
        line(d+100,e+100*sqrt(3)/2-50*tan(30),d+100,e+0);
        line(d+100,e+100*sqrt(3)/2-50*tan(30),d+50,e+100*sqrt(3)/2);  
        line(d+100,e+100*sqrt(3)/2-50*tan(30),d+150,e+100*sqrt(3)/2);
      }
    }
    
    for(var g=100*sqrt(3)/2; g<500; g+=100*sqrt(3))
    {
      for(var f=-50; f<500; f+=100)
      {
        line(f+50,g+50*tan(30),f+0,g+0);
        line(f+50,g+50*tan(30),f+100,g+0);
        line(f+50,g+50*tan(30),f+50,g+100*sqrt(3)/2);
        
        line(f+100,g+100*sqrt(3)/2-50*tan(30),f+100,g+0);
        line(f+100,g+100*sqrt(3)/2-50*tan(30),f+50,g+100*sqrt(3)/2);  
        line(f+100,g+100*sqrt(3)/2-50*tan(30),f+150,g+100*sqrt(3)/2);
      }
    }
    
    strokeWeight(5);
    fill(512-x, 64, 256);
    
    for(var i=0; i<=500; i+=100*sqrt(3))
    {
      for(var h=0; h<=500; h+=100)
      {
        ellipse(h,i,r);
        ellipse(h+50,i+100*sqrt(3)/2,r);
      }
    }
    }
    
  }