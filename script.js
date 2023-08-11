function Studentdetails( named, age, gender, color,  matric,  hobby) {

    this.name = named;
    this.age = age;
    this.gender= gender
    this.color = color;
    this.matric = matric;
    this.hobby = hobby;
  
  
    this.details = function () {
      display.innerHTML = `
  
  <div class = "container mt-5 col-7">
      <div class="card">
  
          <div class="card-body">
             
              <p class="card-text"> ${this.name} is a student in the departtment of Software Engineering and is ${this.age} years old studying Data science, ${this.gender} is ${this.color}in complexion with matric number of <span class="fw-bolder">${this.matric}<span> and has an hobby of ${this.hobby}</p>   
            </div>
        </div>
  </div>
                 `;
                 
    };
  }
  
  let adebimps = new Studentdetails(
    "Adebimpe",
    "24",
    "She",
    "Light",
    "146246",
    "dancing",
  );

    let kate = new Studentdetails(
    "Kate",
    "19",
    "She",
    "dark",
    "146578",
    "dancing",
  );
 let john = new Studentdetails(
    "John",
    "23",
    "he",
    "dark",
    "146522",
    "traveling",
  );

  

  let tola = new Studentdetails(
    "Tola",
    "19",
    "She",
    "dark",
    "146246",
    "reading",
  );

  let sod=new Studentdetails(
    "Sodiq",
    "30",
    "he",
    "Dark",
    "145622",
    "playing football",
  )
   let taye= new Studentdetails(
    "Taye",
    "20",
    "he",
    "Light",
    "143222",
    "singing"
   )
   let ayo= new Studentdetails(
    "Ayo",
    "22",
    "he",
    "dark",
    "143256",
    "playing football"
   )

   let ola= new Studentdetails(
    "Ola",
    "29",
    "he",
    "dark",
    "143566",
    "playing football"
   )

   
   let kunle= new Studentdetails(
    "Kunle",
    "24",
    "he",
    "dark",
    "142166",
    "playing football"
   )
   const Kunle = () => {
    kunle.details();
  };
  
   const Ola = () => {
    ayo.details();
  };
 
   const Ayo = () => {
    ayo.details();
  };
   const Taye = () => {
    taye.details();
  };
  const Adebimpe = () => {
    adebimps.details();
  };

  const Sodiq =()=>{
    sod.details()
  }
  
  const Tola =()=>{
    tola.details()
  }
    const Kate =()=>{
    tola.details()
  }

    const John =()=>{
    tola.details()
  }
 
  