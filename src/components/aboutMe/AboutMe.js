import i from "../../assets/i.jpg";

const AboutMe = () => {
  return (
    <div className="col-sm-9 m-auto">
      <div className="w-25 m-auto mb-3 ">
        <img src={i} alt="i" className="w-100 rounded"/>
      </div>
      <p className="w-75 m-auto fs-5 mb-2">
        Меня зовут Николай, мне 24 года. Более года занимаюсь фронтенд разработкой и испытываю неподдельное удовольствие от занятий программированием.
      </p>
      <p className="w-75 m-auto fs-5 mb-2">
        Мой стек технологий JavaScript/TypeScript React Redux.
      </p>
      <p className="w-75 m-auto fs-5 mb-2">
        Так же имею большой опыт работы в маркетинге, хорошее знание юзабилити. Отличное понимание взаимодействия пользователя и интерфейса.
      </p>
      <p className="w-75 m-auto fs-5 mb-2">
        В свободное время я занимаюсь спортом, читаю литературу и наслаждаюсь классической музыкой.
      </p>
    </div>
  );
};

export default AboutMe;