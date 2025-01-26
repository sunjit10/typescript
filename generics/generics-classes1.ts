interface Song {
  title: string;
  artist: string;
}

interface Video {
  creator: string;
  resolution: number;
}


class PlayList<T> {
 public queue: T[] = [];
 add(el: T) {
  this.queue.push(el);
 }
}

let songList = new PlayList<Song>();
songList.add({title: "Levitating", artist: "Dua Lipa"});

let movieList = new PlayList<Video>();
movieList.add({creator: "Mike Smith", resolution: 1080});