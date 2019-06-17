let strings = [
  {
    name: 'me',
    content: "（看著手上的武器，我的心情無比滄桑）",
  },
  {
    name: 'system',
    content: "[系統] 得到一本 ECMAScript",
  },
  {
    name: 'me',
    content: "ㄏㄏ這下真的成為魔法師了",
  },
  {
    name: 'other',
    content: "m3nt0r: 恭喜你得到武器，接下來的挑戰會更加艱難，只靠 devtool man 的稱號可能是撐不過去的",
  },
  {
    name: 'me',
    content: "啊啊啊啊啊從魔法師進化成工具人了",
  },
  {
    name: 'other',
    content: "m3nt0r: 異世界就拜託你了",
  },
  {
    name: 'me',
    content: "(城堡突然發出轟隆隆的巨響，一扇門從我面前開啟)",
  },
  {
    name: 'system',
    content: "[系統] 接下來的關卡將不只需要瀏覽器，還會需要其他工具，你準備好了嗎？",
  },
  {
    name: 'system',
    content: "[系統] 有任何心得也可以在下方連結留言。",
  },
  {
    name: 'system',
    content: "[系統] https://gist.github.com/ishin4554/f332c54d6cf8f11d085aa56af0b6e966",
  },
  {
    name: 'system',
    content: "[系統] 未來有機會將會有新的關卡，敬請期待。",
  },
];

const type = new Type(strings)
type.typingEffect();