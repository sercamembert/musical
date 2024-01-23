import React from "react";

interface Props {}

const page = () => {
  return (
    <div className="padding flex flex-col mt-[100px] xl:mt-[120px]">
      <h1 className="text-center text-[27px] font-bold md:section-heading ">
        O Projekcie
      </h1>
      <div className="flex flex-col gap-[15px] lg:gap-[25px]">
        <p className="font-medium text-[12px] md:text-[9.93px] lg:text-[12.97px] xl:text-[16.21px] 3xl:text-[17.83px] desktop:text-[20px] ultra:text-[29px] mt-[10px] opacity-70">
          Witamy serdecznie na stronie projektu "Złote Głosy Musicalu" –
          niezwykłej muzycznej podróży przez magiczny świat najpiękniejszych
          musicalowych utworów, zaśpiewanych przez wybitne głosy polskiej sceny
          muzycznej. To wydarzenie, które zaprasza do uczestnictwa w
          niezapomnianym spektaklu, pełnym emocji, piękna i sztuki.
        </p>
        <p className="font-medium text-[12px] md:text-[9.93px] lg:text-[12.97px] xl:text-[16.21px] 3xl:text-[17.83px] desktop:text-[20px] ultra:text-[29px] mt-[10px] opacity-70">
          Złote Głosy Musicalu to wyjątkowy projekt, który skupia się na
          prezentacji popularnych i pełnych emocjonalnego ładunku utworów z
          uwielbianych musicali. Odtwórcy głównych ról musicalowych, będący
          gwiazdami polskiej sceny muzycznej, przeniosą nas w świat największych
          światowych produkcji, takich jak Upiór w Operze, Nędznicy, Mamma Mia,
          Koty, West Side Story, Moulin Rouge, Miss Saigon, Six, We Will Rock
          You czy Wicked.
        </p>
        <p className="font-medium text-[12px] md:text-[9.93px] lg:text-[12.97px] xl:text-[16.21px] 3xl:text-[17.83px] desktop:text-[20px] ultra:text-[29px] mt-[10px] opacity-70">
          Jeśli pragniesz przeżyć chwile pełne emocji, wzruszeń i zachwytu nad
          pięknem muzycznej sztuki, to "Złote Głosy Musicalu" są idealnym
          wyborem. Dołącz do naszej muzycznej podróży i pozwól się porwać
          fascynującemu światu musicalowych dźwięków i wrażeń!
        </p>
      </div>
    </div>
  );
};

export default page;
