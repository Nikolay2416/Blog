import i from "../../assets/i.jpg"

const AboutMe = () => {
  return (
    <div className="col-sm-9 m-auto">
      <div className="w-25 m-auto mb-3 ">
        <img src={i} alt="i" className="w-100 rounded"/>
      </div>
      <p className="w-75 m-auto text-center fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, provident tenetur commodi sequi iure consectetur totam eius corrupti! Suscipit magni culpa eligendi ratione. Minima sequi nemo laboriosam delectus inventore iusto?</p>
    </div>
  );
};

export default AboutMe;