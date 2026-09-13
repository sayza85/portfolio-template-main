import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Kanthira Phannin",
  role: "Game Developer & Software Engineering Intern",
  introduction: "Year 4 Computer Science Student at Rajamangala University of Technology Isan",
  description: "นักศึกษาชั้นปีที่ 4 สาขาวิทยาการคอมพิวเตอร์ มทร.อีสาน มุ่งมั่นหาที่ฝึกงานตำแหน่ง Game Developer / Programmer มีความถนัดในการพัฒนาเกมด้วย Unity (C#) ทั้งระบบ Gameplay, Player Controller และการสร้างบรรยากาศภายในเกม (Atmosphere Building)",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/Resume.pdf`,
  links: {
    github: "https://github.com/sayza85",
  }
};
export const games: Game[] = [
  {
    name: "TAIL OF THE FOREST",
    description: "2D Game Development (2025)\n• Designed and developed the player control system (Player Controller) and core game mechanics using C# in the Unity Engine.",
    genres: ["2D Game", "Platformer", "Indie"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/sayza85" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/GuAnqgN3thg", type: MediaType.YouTube },
    ],
  },
  {
    
    name: "Silent Ember",
    description: "3D Game Development (2025 – Present)\n• Designed and developed psychological atmosphere systems (Atmosphere Building), including lighting systems and post-processing effects to convey the character's emotional state and enhance immersion.\n\nผลงานที่ผ่านเข้ารอบ\nผ่านการคัดเลือกรอบภูมิภาค เข้าสู่รอบชิงชนะเลิศระดับประเทศ ในการแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทย ครั้งที่ 28 (NSC 2026)\n\nผลงาน\nSilent Ember: การพัฒนาเกมสามมิติแนว Psychological Horror ด้วยกลไกการเล่าเรื่องผ่านแสงและสถาปัตยกรรมแบบ Event-Driven",
    genres: ["3D Game", "Atmospheric", "Adventure", "Horror"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/sayza85" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/aeA_NZXMz9c", type: MediaType.YouTube },
      { source: "/images/games/silen_ember/ทุน.jpg", type: MediaType.Image },
      { source: "/images/games/silen_ember/บอร์ด.jpg", type: MediaType.Image },
      { source: "/images/games/silen_ember/ปก.jpg", type: MediaType.Image },
    ],
  
  },
];