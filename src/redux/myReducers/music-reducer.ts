// IMPORT PICTURES FOR NEW POST
import playlist1 from "../../img/playlist1.png";
import playlist2 from "../../img/playlist2.png";
import playlist3 from "../../img/playlist3.png";
import playlist4 from "../../img/playlist4.png";
import playlist5 from "../../img/playlist5.png";

export type musicType = {
  id: number;
  title: string;
  author: string;
  playlist: string;
  timeline: string;
  link: string;
  img: any;
};
// INITIAL STATE
let initialState = {
  music: [
    {
      id: 1,
      title: "Conversation",
      author: "Juice WRLD",
      playlist: "Legends Never Die",
      timeline: "3:02",
      link:
        "https://open.spotify.com/track/4K06PO78fW4mnBVenxGNob?si=vcoawoXuQr2h26Om_tIY0g",
      img: playlist1,
    },
    {
      id: 2,
      title: "Noticed",
      author: "Lil Mosey",
      playlist: "Certified Hitmaker (AVA Leak)",
      timeline: "3:15",
      link:
        "https://open.spotify.com/track/7zLYKWcXnYeHHWidalz7rj?si=pjw09eDDRnWx8aL3bzWfRA",
      img: playlist2,
    },
    {
      id: 3,
      title: "Blood On My Jeans",
      author: "Juice WRLD",
      playlist: "Legends Never Die",
      timeline: "3:15",
      link:
        "https://open.spotify.com/track/0fCwrjKfWxF3xQhZrYUw4T?si=ZAtYsS1nS4yRiWCkmavh1A",
      img: playlist1,
    },
    {
      id: 4,
      title: "Fine China",
      author: "Future & Juice WRL",
      playlist: "WRLD ON DRUGS",
      timeline: "2:22",
      link:
        "https://open.spotify.com/track/5274I4mUMnYczyeXkGDWZN?si=wFhx6qEJQLSt602A5C8EZg",
      img: playlist3,
    },
    {
      id: 5,
      title: "Wishing Well",
      author: "Juice WRLD",
      playlist: "Legends Never Die",
      timeline: "3:15",
      link:
        "https://open.spotify.com/track/2U5WueTLIK5WJLD7mvDODv?si=hul4yiXoQVG19zM-IZHpUw",
      img: playlist1,
    },
    {
      id: 6,
      title: "Smile",
      author: "Juice WRLD & The Weekend",
      playlist: "Legends Never Die",
      timeline: "3:16",
      link:
        "https://open.spotify.com/track/1EIsJed40cd7Bcv8SXVdqA?si=yx2lLDW8T4iTU8NYdm1o4w",
      img: playlist4,
    },
    {
      id: 6,
      title: "Let me know",
      author: "Juice WRLD",
      playlist: "I wonder why freestyle",
      timeline: "3:35",
      link:
        "https://open.spotify.com/track/3wwo0bJvDSorOpNfzEkfXx?si=h6OJ28pTTzCEKSfDP1BEYw",
      img: playlist5,
    },
  ] as Array<musicType>,
};

type initialStateType = typeof initialState;

// THIS REDUCER TAKES IN THE STATE AND THE ACTION CALLED
const musicReducer = (
  state: initialStateType = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    default:
      return state;
  }
};

export default musicReducer;
