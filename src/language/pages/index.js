import cardBanner1 from '../../assets/home-2.jpg'
import cardBanner2 from '../../assets/home-3.jpg'
import cardBanner3 from '../../assets/home-4.jpg'
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'

export default {
  zh: {
    introduce: {
      title: '欢迎来 <span style="color:#D71920">ILUNO</span> 学习英语',
      text: '这里有你一直在寻找的机会，提高你的英语水平，获得更多的自信。'
    },
    cards: [
      {
        title: 'ILUNO 项目简介',
        text: '想要知道更多？ 这里可以找到一切关于我们的项目信息。',
        img: cardBanner1,
        link: '/about'
      },
      {
        title: '生机勃勃的城市社群',
        text: '丰富的生活、文化、美食，精彩的伙伴，以及无限的机会。',
        img: cardBanner2,
        link: '/community'
      },
      {
        title: '校园生活',
        text: '这不仅仅是一次课堂体验，我们会改变游戏的规则， 让你从此与众不同。',
        img: cardBanner3,
        link: '/life'
      }
    ],
    comments: {
      title: '倾听世界的声音',
      location: 'Omaha, NE',
      desc: '在美国的中心',
      cards: [
        {
          avatar: avatar1,
          name: '北野弘道, 日本',
          text: '我已经在ILUNO学习了三个月了，我真希望我还可以在这里继续学习很久。在这之前，我甚至没有听说过奥马哈这座城市，然而如今，我甚至不想离开。 我刚来到美国的时候，我无法与当地人交谈，但是现在，我对我的英文听力非常自信，并且十分喜爱用英文表达自己。我的老师们平时对我非常用心，用了很多时间和精力来帮助我成长。我对他们非常的感激。'
        },
        {
          avatar: avatar2,
          name: '艾莎 弗洛拉 索门， 布基纳法索',
          text: '我最初来到ILUNO的目的是为了学习英文，结果我不仅提高了语言水平，还交到了来自世界各地的朋友，感受到了不同国家的文化魅力。这里的课程内容非常有趣，老师们也充满了热情和感染力。我接下来会在奥马哈继续学习计算机科学，并且计划最终在UNO获得我的本科学位。我对我这里的老师们非常的感恩。在奥马哈学习的经历将成为我一生的瑰宝。'
        }
      ]
    }
  },
  en: {
    introduce: {
      title: 'Welcome to <span style="color:#D71920">ILUNO</span> INTENSIVE ENGLISH',
      text: 'The opportunity you have been waiting is here.  Take your English confidence and academic knowledge to a new level.'
    },
    cards: [
      {
        title: 'About ILUNO program',
        text: 'Curious to know more? Everything about our program can be found here.',
        img: cardBanner1,
        link: '/about'
      },
      {
        title: 'The Community',
        text: 'Teeming with life, culture, great food, awesome people, and endless opportunities.  ',
        img: cardBanner2,
        link: '/community'
      },
      {
        title: 'Life in ILUNO',
        text: 'More than just a classroom experience. It’s a game changer. One that will set you apart from others.',
        img: cardBanner3,
        link: '/life'
      }
    ],
    comments: {
      title: 'THE WORLD MEETS HERE',
      location: 'Omaha, NE',
      desc: 'In the Heart of the U.S',
      cards: [
        {
          avatar: avatar1,
          name: 'KITANO HIROMICHI, JAPAN',
          text: 'I have been in ILUNO classes for three months and wish I could stay at UNO much longer. I hadn’t heard of Omaha before my friends told me about it, but now I never want to leave. When I came I couldn’t understand English speakers, but now I have confidence in my listening skills and I actually like talking in English. My teachers take time to answer our questions. They are all the greatest teachers I’ve ever met.'
        },
        {
          avatar: avatar2,
          name: 'ELSA FLORA SOMÉ, BURKINO FASO',
          text: 'I came to ILUNO to improve my English, but I have also made a lot of new friends and learned from other cultures. The classes are very interesting, the teachers are enthusiastic, and it is easy to learn. I plan to continue my studies in Computer Science in Omaha and eventually graduate from UNO with my bachelor’s degree. I am very thankful to all of my ILUNO teachers. It was a very awesome experience.'
        }
      ]
    }
  }
}
