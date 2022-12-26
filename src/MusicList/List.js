import DraggableList from "react-draggable-list";

const list = [
  {
    id: 0,
    name: "Into the night",
    artist: "YOASOBI",
    image:
      "https://cdn-japantimes.com/wp-content/uploads/2021/08/np_file_105988-870x489.jpeg",
    url: "https://drive.google.com/uc?export=view&id=1AgGUBxx1USLSU8o7JCGQheYGoHwFD6fm",
    type: ["EDM"],
  },
  {
    id: 1,
    name: "Hooked on a feeling",
    artist: "Blue Swede",
    image: "https://i.ytimg.com/vi/NrI-UBIB8Jk/mqdefault.jpg",
    url: "https://drive.google.com/uc?export=view&id=1H7MiuBR5ofRbdg7Mt2G3HrLrjEht_ehu",
    type: ["Pop Rock", "R&B/Soul"],
  },
  {
    id: 2,
    name: "Reality",
    artist: "Lost Frequencies",
    image: "https://melodicpop.com/build/images/artists/lost-frequencies.png",
    url: "https://drive.google.com/uc?export=view&id=1WUy8BlH4gw8kQ72knJdzwtBSKKpLumOz",
    type: ["Deep House", "R&B/Soul", "Ukrainian Pop"],
  },
  {
    id: 3,
    name: "Believer",
    artist: "Imagine Dragons",
    image:
      "https://i1.sndcdn.com/artworks-s3zOCWcV8XQVtQcv-0emq8A-t500x500.jpg",
    url: "https://drive.google.com/uc?export=view&id=18Th6PJCf-0JrkSdIYQ5_epeLSxgNGqRv",
    type: ["Pop Rock", "Arena pop"],
  },
  {
    id: 4,
    name: "This girl",
    artist: "Kungs vs Cookin’ on 3 Burner",
    image: "https://i1.sndcdn.com/artworks-000146780072-z8inm0-t500x500.jpg",
    url: "https://drive.google.com/uc?export=view&id=1rA7nX4hJcqi-PpBQAemkVZnLZxk3x0AY",
    type: ["Dance/Electronic"],
  },
  {
    id: 5,
    name: "Counting Stars",
    artist: "OneRepublic",
    image: "https://i1.sndcdn.com/artworks-000040814493-eu3kr3-t500x500.jpg",
    url: "https://drive.google.com/uc?export=view&id=1T_Ro100XjNMnnIOcywTX5KnLIYXRFADR",
    type: ["Pop Rock", "Folk-pop"],
  },
  {
    id: 6,
    name: "Adventure of a lifetime",
    artist: "Coldplay",
    image:
      "https://i1.sndcdn.com/artworks-YEwXu5sQShwND3Rc-r1FSRw-t500x500.jpg",
    url: "https://drive.google.com/uc?export=view&id=1CrCnTFEk9ATSQ-dAKYWMzu4rzz60eC1F",
    type: ["Pop", "Disco", "Funk"],
  },
  {
    id: 7,
    name: "Something Just Like This",
    artist: "The Chainsmokers & Coldplay",
    image:
      "https://upload.wikimedia.org/wikipedia/vi/5/57/Something_Just_Like_This.png",
    url: "https://drive.google.com/uc?export=view&id=1C1W8AJpTcZldKAMVhIEHrZVh_idd2OvH",
    type: ["Pop", "EDM"],
  },
];

function List() {
  return <DraggableList list={list} />;
}

export default List;
