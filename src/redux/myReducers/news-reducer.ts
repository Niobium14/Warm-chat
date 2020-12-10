// IMPORT PICTURES FOR NEW POST
import news1 from "../../img/news_info1.jpg";
import news2 from "../../img/news_info2.jpg";
import news3 from "../../img/news_info3.jpg";

type uncosType = {
  id: number;
  event: string;
  title: string;
  img: any;
};
// INITIAL STATE
let initialState = {
  uncos: [
    {
      id: 1,
      event:
        "Joseph Nuwashaba, 22, is being held by the country's Criminal Investigations Department (CID). It is not yet clear what he intended to do with the parcel or where and how he acquired the head.A CID source said that a child was reported missing in Masaka, south-west of the capital, Kampala, on Sunday.A headless body has also been recovered in that district.",
      title:
        "Ugandan carrying child's severed head arrested outside parliament",
      img: news1,
    },
    {
      id: 2,
      event:
        "Thwaites is one of the fasting flowing glaciers in Antarctica and would be the structure responsible should something in the West Antarctic destabilize, Indrani Das, associate research professor at Columbia University's Lamont-Doherty Earth Observatory and co-principle investigator for the International Thwaites Glacier Collaboration, told ABC News. ",
      title:
        "Satellite images show deterioration of Antarctica glaciers that could lead to rising sea levels",
      img: news2,
    },
    {
      id: 3,
      event:
        "Kim Kardashian announced a new maternity collection is coming soon from her Skims shapewear brand, and it's already sparking lots of mixed opinions. Alongside a photo of the upcoming line, Kardashian announced that the new Maternity Solutionwear will offer the best in comfort and support for changing bodies during and after pregnancy.",
      title: "Kim Kardashian defends backlash to her SKIMS maternity line",
      img: news3,
    },
  ] as Array<uncosType>,
};

type initialStateType = typeof initialState;

// THIS REDUCER TAKES IN THE STATE AND THE ACTION CALLED
const newsReducer = (
  state: initialStateType = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    default:
      return state;
  }
};

export default newsReducer;
