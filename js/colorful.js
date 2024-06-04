var config = {
    readme: {
        name: '欢迎 Welcome',
        type: 'md',
        value: 'readme',
        style: ['medium'],
        link: ['entry', 'icon'],
        icon: 'help',
        start: true
    },
    drug: {
        name: '药物 Medication',
        type: 'okusuri',
        value: {
            tail: {
                name: '右美沙芬',
                type: '123',
                value: './qwq/212.html',
                style: ['large']
            },
            magika: {
                name: '金刚烷胺',
                type: '123',
                value: 'internet1',
                style: ['large']
            },
            internet: {
                name: '普瑞巴林',
                type: '123',
                value: 'internet2',
                style: ['large']
            },
            recovering: {
                name: '可待因',
                type: '123',
                value: 'recovering',
                style: ['large']
            }
        },
        desc: '薬物',
        style: ['medium'],
        link: ['entry', 'icon']
    },
    secret: {
        name: '秘密 Secret',
        type: 'folder',
        value: {
            secret2: {
                name: '[encrypted]',
                type: 'folder',
                value: {
                    secret3: {
                        name: '???',
                        type: 'folder',
                        value: {
                            '縺ｪ縺ｫ繧ゅ↑縺': {}
                        }
                    }
                }
            }
        },
        link: ['entry']
    },
    mis7: {
        name: '支持 Support',
        type: 'folder',
        value: {
            internet8: {
                name: '联系 Contact',
                type: 'url',
                value: './contact.html',
                style: ['large']
            },
        internet9: {
                name: 'PGP Public Key Block',
                type: 'md2',
                value: './qwq/212.html',
                style: ['large']
            }
        },
        desc: 'All support in one place',
        style: ['medium'],
        link: ['entry', 'icon']
    },
    mi7: {
        name: '法律 Legal',
        type: 'folder',
        value: {
            internet8: {
                name: '条款和隐私声明 Terms &amp; Privacy Notice',
                type: 'md2',
                value: 'internet8',
                style: ['large']
            },
            internet9: {
                name: '数据处理要求 Data Handling Requirement',
                type: 'md2',
                value: 'internet8',
                style: ['large']
            }
        },
        desc: 'Legal stuffs',
        style: ['medium'],
        link: ['entry', 'icon']
    },
    Twitter: {
        type: 'twitter',
        value: 'twitter.js',
        style: ['large'],
        link: ['icon']
    },
    Facebook: {
        type: 'facebook',
        value: 'facebook.js',
        style: ['large'],
        link: ['icon']
    },
    Instagram: {
        type: 'instagram',
        value: 'instagram.js',
        style: ['large'],
        link: ['icon']
    },
    Telegram: {
        type: 'telegram',
        value: 'telegram.js',
        style: ['large'],
        link: ['icon']
    },
    哔哩哔哩Bilibili: {
        type: 'bilibili',
        value: 'bilibili.js',
        style: ['large'],
        link: ['icon']
    },
    Youtube: {
        type: 'youtube',
        value: 'youtube.js',
        style: ['large'],
        link: ['icon']
    },
    unya: {
        name: '混沌',
        type: 'js',
        value: 'unya.js',
        link: ['icon']
    }
};

const htmlConfig = {
    readme: `<h1>欢迎来到小冷官方网站</h1>
    <h2>Welcome to Xiaoleng Official Website</h2>
    <p><img src="./images/logo.png" alt="logo"></p>
    <p>这里是你们最可爱的每天都在追逐着星光的梦想的小冷<br>
    I am ur cutest Xiaoleng, chasing the dreams of starlight every day.</p>
    <p>欢迎来到小冷的世界<br>
    Welcome to the world of Xiaoleng.</p>`,
    internet1: `<h2>金刚烷胺</h2>
  
      极为危险的畜生药物。在决定服用之前，你需要知晓其杀伤性，且绝对不能高剂量使用</p>

金刚烷胺(Amantadine, ATD) 是早年的抗流感病毒药与抗帕金森药，属于解离麻醉剂、非血清素能致幻剂。一般以盐酸配合物，即盐酸金刚烷胺。由于读音相近，金刚烷胺俗称晚安</p>

  <h3> 药理作用</h3></p>
  
    <h3>作用机理</h3></p>
    
        激动释放：多巴胺/DA</p>
    激动合成：多巴胺/DA</p>
    抑制再摄取：多巴胺/DA</p>
    激动受体：多巴胺D2受体/D2</p>
    正变构受体：多巴胺D2受体/D2</p>

【以上作用，多进行于纹状体】</p>

    拮抗受体：NMDA（非竞争性）</p>
    激动释放：正肾素/NE</p>
    抑制受体：烟碱乙酰胆碱/nAChR</p>
    激动受体：σ-1/Sigma-1</p>
    干扰病毒蛋白M2质子通道（此项与精神药效无关）</p>
    
  <h3>药物作用</h3>
  
      主要的副作用：精神分裂、记忆力废退、阿兹海默症、胃溃疡、震颤</p>
    急性的副作用：记忆力丧失、认知丧失、抗胆碱能综合征、呕吐、晕迫、呆滞</p>
    以一条条生命换来得知的副作用——</p>
    RP-49：被害妄想症、坠楼自杀风险、梦游、以假乱真的视觉幻觉、谵妄</p>
    RP-50：心境破坏、重症抑郁</p>
    主要的主作用：外部视觉幻觉、解离、镇静</p>
  
<h3>医学作用</h3>

在正常情况下，金刚烷胺被用于治疗感冒和帕金森病</p>

因其特殊的化学结构，金刚烷胺可以抑制病毒穿入宿主细胞，并影响病毒的脱壳，抑制其繁殖，起治疗和预防病毒性感染作用，从而治疗病毒性感冒</p>

金刚烷胺进入脑组织后可促进大脑释放多巴胺，同时延缓多巴胺的代谢而发挥抗震颤麻痹作用。缓解治疗震颤麻痹、僵直等症状，从而治疗帕金森病</p>

<h3>药代动力学</h3>

金刚烷胺在体内几乎不代谢，并处于原形以肾经尿排泄[1]。口服吸收快而完全，2~4小时，血药浓度达到峰值。半衰期完全取决于肾功能，一般为12h，肾衰竭人员则可达到28h。</p>

金刚烷胺几乎没有耐药性</p>




<h3>药物品牌</h3></p>


盐酸金刚烷胺【单方制剂】——</p>
　　鹏鹞：瓶装100mg×100片，价格约11元</p>
　　东北制药：盒装100mg×每板12片×2板，价格约28元</p>

复方氨酚烷胺【复方制剂】——</p>
　　感康：盒装100mg×每板6片×2板，价格约16元</p>

    不要服用复方制剂，它不仅贵，效果还不好，还容易因为复方的其他成分而吃坏肚子</p>

剂量 【以60kg为标准】</p>

医学剂量：1t~2t，每日两次</p>
起效剂量：3t~7t</p>
轻度剂量：7t~10t</p>
中度剂量：10t~13t</p>
高度剂量：13t~15t</p>
重度剂量：15t~17t</p>
死亡剂量：17t以上的</p>
推荐剂量：12t或6t</p>
最高剂量：17t</p>
期间 【以距离服药已过去的时间为标准】【缺少数据】</p>

起效时：30min~3h（非常慢）</p>
来效时：2h~3h</p>
顶峰时：3h~5h</p>
退效时：5h~7h</p>
残效时：7h~12h</p>
总效时：12h~48h</p>

    需注意，体重不同剂量不同，上述剂量是针对60kg的人的。你的体重除以60，再乘以上述之中的剂量，即为适应你的剂量</p>

    别再靠近了！那么高剂量的金刚晚安不仅不会增加药效，反而会降低药效，让幻觉丢失，令副作用大上天。强化药效的方法可见补充剂</p>

金刚烷胺独特的外部幻觉</h3>

金刚烷胺的精神分裂样外部幻觉，源于对视觉内容的再次想象。为空前消耗多巴胺，刺激纹状体对视觉内容进行二次想象加工而成。换个说法，来源于刺激大脑消耗多巴胺产生幻觉。也有一部分是谵妄样幻觉</p>

那么，产生的幻觉是对服药者无意识的体现。服药者其内心越是空洞，幻觉越是骇人听闻。幻觉是部分可控的，你或许可以对墙壁想象出你想要的图案</p>

据报告，这些幻觉可能是但不限于：

    视觉出现噪波，多为红绿色</p>
    本是静止的物体在移动</p>
    空中出现一团絮状物，出现漂浮的黑色粉末</p>
    看见影子人，影子人是黑色的人形黑影，有可能还可以走动，甚至可以与服药者正常对谈。影子人是谵妄的特征表现</p>
    视觉出现黑色的洞（K洞），表现在有一团黑色在视觉里，遮挡视线</p>
    墙上有字。纯色的地方，比如墙壁天花板出现抽象的几何图案，多以红绿黑色描绘，并可以不断变化外形。在服药者边走边看时，这些几何图案就像真的画在墙上，符合美术透视地贴在墙上。更高阶段时，图案会更加复杂，形成似真似幻的物体，或者是恐怖的物体。据笔者的体验，笔者在服用晚安昏迷前，曾见过自己整个房间的一切物体，全都是幻觉，但这段画面的记忆只有不到两秒
    纯色部分出现规整如同花纹的噪点、色块</p>
    更高层次诱发的精神分裂下，可看见完全不符合逻辑存在的事物。例如：床上出现尸体，关闭的电视在播放电影，无人的门外有打着闪光灯的警察</p>

以上仅仅是醒着时的状态，在睡着后，晚安能让人做噩梦的概率急剧增加，甚至可能必定会做噩梦。而且这些噩梦都比正常状态下所做的都更加逼真和恐怖。</p>

    这个梦的素材将来自于几乎所有让你害怕的、恐惧的、尴尬的、内疚的、失望的、悔恨的……（更多描述词语建议百度搜索“负面情绪词语大全”）的经历。总之就是每个人都因人而异的，最符合每个人不同的恐惧点的，比噩梦不能再噩的梦。</p>
    梦境一般都会起源于一件你已经发生过的事，如果这件事本身不是很糟，那么梦境就会让这件事发生到一个现实中没发生的，特别糟的状态；如果这件事本身就很糟，那么梦境只会让这件事更糟。</p>
    服药后所做的梦反而会异常的真实，即使你无法记得请细节，但你一定会认为这是你做过最真实的梦之一。这种真实如果被施加到噩梦上……简直是一场灾难！</p>
    有些时候服药者可能甚至会分不清梦境和现实，在现实中仍然认为这是梦中，刚醒来后可能会试图在现实中做些什么以试图挽回在梦境中糟糕的结果，引起误会和尴尬。</p>
    这种梦可能会扭曲你对时间的感知，你可能认为这个梦已经发生了很长时间，就算是梦也肯定够睡好几个小时了吧？但实际上现实中才仅仅过了十几二十分钟而已。</p>

如果运气不好的话，现实中的幻觉和睡着后的噩梦可能会联合上演，例如刚梦见床上出现了尸体，惊醒后就在床上幻视见了尸体（

    晚安，让你无法晚安</p>

<h3>其它效果</h3>

事实上，晚安的作用远不限于上述所说的那些“特殊的幻觉”，上述幻觉也并非晚安所会带来的唯一效果，除此之外，受个体差异、服药间隔、单次用量，等各种因素影响，包括前文“药理作用-药物作用”的部分在内</p>

晚安已被确认会发生的其它效果还有：</p>
昏迷、嗜睡</p>

大多在刚开始服药后的0.5-2小时内发生，这种困倦感有些类似于醉酒状态，使用者一般会在该效果开始后试图找地方躺下“睡着”，和睡觉完全不同的是，这种状态并不能补充睡眠，醒来后反而会感觉更困了。</p>

这种嗜睡可能会让你一次睡8-24个小时，在服药数小时后有可能会“自然醒”，但你绝对会因为药效仍在所带来的疲惫感而继续接着睡下一觉，如果没有必要去做的事或其他外部因素打扰，这场酣睡可能还会保持更久。</p>

<h3>行动迟缓</h3>

一般在服药的大前期首先出现，和右美类似的，路走不稳，容易摔倒，随着药物入口的时间进程逐渐丧失大部分行动能力，并陷入上一条的“昏迷”状态。</p>

<h3>失忆、断片</h3>

完全记不住服药前后发生的事，甚至感觉这段时间像被剪去了一般。</p>

<h3>语言障碍</h3>


难以对想说的话进行思考，脑子犹如一团浆糊；嘴唇就像被打了麻药一样，难以控制唇齿挤出合适的嘴型用于说话，想要不费力气只能发出a o e等最简单的单元音读音，想要说话也并非不能，主要因为这么做本身异常困难以及自身不愿意去说。</p>

头昏眼花</p>

类似于体位性低血压，但可能从醒来后一直持续一到两天多时间。站起时血液难以到达大脑从而感到头昏眼花，但晚安所造成的“低血压”远比自身曾经正常状态下的的任何一次低血压都要严重。正常状态下可能弯下腰或缓一会就好了，但在晚安的状态下即使你试图给身体再多适应时间，短时间内可能都无法站立甚至坐直，只能躺着或蹲着才能恢复正常。如果执意要站着，便会两眼一黑，像低血压患者一样晕倒。虽然并不大可能长期不吃饭而单独造成的，但这一效果的确可通过补充碳水或糖类来得到缓解。</p>

食欲不振</p>

从服药导致恶心开始，会产生可持续至退效时48h甚至更久的厌食效果，即使此时已经一两天没吃任何东西了，但还是不知为何什么都不想吃。这和缓解上一条的方式显然是冲突的。造成食欲不振的主要原因是盐酸金刚烷胺所含有的盐酸刺激胃壁，从而产生的胃溃疡导致的，不过不用担心，这种情况导致的胃溃疡属于很轻的症状，两三天左右就会消失。【存疑】</p>

上述效果有部分的确是高剂量下会出现的，但也正是由于这些“debuff”，服药者往往没法准确描述幻觉，所以更多可能发生的效果还处在待补充状态</p>

这些症状应该或许和用量有着直接关联，但由于数据和样本的严重缺乏，目前仍无法给出具体对照表，以上大部分效果具体的医学原因、持续时间等均尚不明确。</p>

一些事项</p>

金刚烷胺本身能够释放并消耗大量的多巴胺，若多次服用可能造成多巴胺耗尽，加上不少使用者本身不健康的饮食习惯，导致多巴胺无法获得相应的补充，进而无法出现幻觉。此外，金刚烷胺引起的重度抑郁也是由于长期缺少多巴胺而造成的。恢复方法可见恢复术、补充剂</p>

金刚烷胺造成的记忆力废退并非危言耸听，有报告表明有样本曾在几天内，连续两次服用了高剂量的金刚烷胺，从而导致自身明显的记忆力下降、以及思考困难等状况。恢复方法可见恢复术</p>

金刚烷胺产生的记忆力废退，来源于抗胆碱能综合征与解离。</p>

大量报告证实，金刚烷胺不能和普瑞巴林联用，否则会发生极其危险的事故。请不要尝试联用二者，或在其中一种药物退效后短时间内立即使用另一种。 详见药物联用</p>

虽然美金刚化学结构与金刚烷胺相似（美金刚又名二甲金刚烷胺），但两者药效差距很大。</p>

历史</h3>

（由于笔者认识有限，难免叙述出现差错缺漏。欢迎补充）
2022.06.23，金刚烷胺因一篇推文而被发掘出滥用潜力。该推文报告，金刚烷胺可引起视觉幻觉、时间定向力障碍、记忆障碍等效果。在此之前，金刚烷胺只是被兽医滥用于鸟类抗禽流感[2]。</p>

最初，金刚烷胺仅被当做右美沙芬的增效剂，剂量仅有个位数以下。在右美沙芬被禁售之后，由于金刚烷胺的解离比右美沙芬强，且便宜好买，金刚烷胺的致幻能力逐渐被关注，剂量逐渐来到15t左右，越来越多的人开始喜好金刚烷胺带来的解离与外部幻觉。</p>

到笔者写下此段文字的2024.01.21，不仅出现了滥用复方金刚烷胺“感康”的风气，人们滥用金刚烷胺的剂量也越来越大。据报告，相当多的人员每次服用20t以上的金刚烷胺并长期多次。无需说明这对机体的杀伤力，只需明白一点：解离型麻醉，导致服药者无法判断危险，也就是，丧失了辨别能力……</p>

2024.4.21今天我对药物效果等部分添加了更多更详细的描述，后期可能会添加更多。无论是收到的报告数量还是日常上推所能见到的，如今晚安的滥用人数目前已经明显的有所提升。</p>
由于金刚烷胺目前依然很容易通过常规途径而不用借助药商等特殊途径买到，以及鹏鹞制药卖的的确异常便宜，几乎是所有od药物中最廉价的，等因素。如今这种幻觉上比不过右美、副作用上远超本wiki几乎其他所有药的药物也渐渐的开始被更多人滥用起来。或许这种药从一开始可能就并不存在什么利用价值吧？</p>

  
  <a href="https://en.wikipedia.org/wiki/Amantadine">《wikipedia》</a><p>
  `,internet8:`<h1>互联网（前篇）</h1>
  <p>总是在说快远离互联网，可要是连互联网是什么都不知道的话不就太可怜了么。</p>
  <h2>双绞线</h2>
  <p>怎么在两台电脑之间互传数据？最简单的方法大概是找根线把它们连起来。当然对于很远的情况，可能需要2根线————就像输电也至少需要火线和零线那样。</p>
  <p>连起来之后怎么传输数据？最容易想到的就是用高低电平来表示0和1，可惜行不通。CPU有时钟信号，但想用一对线上的高低电平传输数据会遇到各种问题：</p>
  <ul>
  <li>1ms的高电平，是1bit的1还是100bit的1？</li>
  <li>1ms的低电平，是一串0还是无事发生？</li>
  </ul>
  <p>于是我们需要同步信号的方法，识别数据开始与结束的标志，以及某种编码系统来表示这些。很遗憾 IEEE 的标准不像 RFC 是公开的，所以我也是一知半解，简要地说大概是：</p>
  <ol>
  <li>数据开始时有 Preamble (56bit的0-1交替，即7个0x55) 和 SFD (0xD5) 用于同步时钟和标记开始。</li>
  <li>使用某种编码系统（比如<a href="https://en.wikipedia.org/wiki/4B5B">4B5B</a>）以便无歧义地解码。</li>
  <li>编码的冗余提供了额外的符号用以表示结束，空闲，无信号等等。</li>
  </ol>
  <p>现在就可以将数据从一端传到另一端了。顺便一提，将这一对线绞在一起可以抵消相当的电磁干扰，所以自从上古的模拟电话开始便使用双绞线作为数据线了。</p>
  <h2>以太网</h2>
  <p>那么又如何完成双向传输？如果实在懒得出门再买一根线，就只能从软件上下手，通过调度让双方可以无冲突地通信。方法有点像通过无红绿灯控制的路口：</p>
  <ol>
  <li>开始发送前先进行观察，如果线路空闲则开始。</li>
  <li>否则等待随机的时间再开始，避免再次冲突。</li>
  <li>如果发送的时候检测到冲突，就立即停止，也等待一个随机的时间再试。</li>
  <li>每次失败大致加倍等待时间（但仍是随机的），直到忍无可忍，报错结束。</li>
  </ol>
  <p>这套算法叫<a href="https://en.wikipedia.org/wiki/Carrier-sense_multiple_access">CSMA/CD</a>，有了它便可以在单一介质上进行双向（半双工）通信。当然事实上超过2台设备也是可以的，这时双绞线变成了总线。据说远古的上网方式便是用一种钳子钳进一根超粗的铜线，当然我是没有见过。</p>
  <p>这种多台设备共享同一介质通信的概念有点像假想的电磁波介质“以太”，于是被称作以太网。</p>
  <h2>交换机</h2>
  <p>现在只要把世界上的所有设备都连到同一个“以太网”上，英特纳雄耐尔不就实现了？想得美。不难想象，这样的总线结构效率十分低下，一人说话全员坐牢。想要同时收发，必然要增加介质的数量————一人一条网线怎么样？不连接到总线，而是连到某种奇妙的设备，可以智能地交换数据，这样神奇的设备就暂时叫它交换机好了。</p>
  <p>网线上的数据没有名字。想要知道交换到哪里，我们需要一个唯一的编号来识别自己，这就是大名鼎鼎的MAC地址。简单来说就是48位二进制，前24位由 IEEE 分配给厂商，后24位由厂商保证唯一性，全世界范围内也独一无二。而交换机只需维护一个地址到物理接口的表格，收到数据时查表根据目标地址转发即可。如果找不到，则向所有人广播这段数据，等待正确的接收者回复，这时就可以记录下它的位置，不必再广播了。</p>
  <p>这么复杂的系统似乎很容易出错？那就加上错误校验吧。有种叫做<a href="https://en.wikipedia.org/wiki/Cyclic_redundancy_check">CRC</a>的校验码可以高效地检测错误。于是，数据的结构（叫做帧）变成了这样：</p>
  <p>目标MAC - 源MAC - 协议号 - 数据 - 校验码</p>
  <p>之所以把校验码放在最后是因为CRC本质是某种除法的余数，放在最后就简化成了验证整个帧是否能被除数整除，可以很高效地计算。这里使用的是CRC-32，可以检查出多达连续32位的错误，但是并不能简单地加以修复，所以没有通过验证的话，就只能丢掉了。</p>
  <p>到此为止，我们有了任意两台设备间的可靠连接，结束了？</p>
  <h2>补充说明</h2>
  <h3>千兆以太网</h3>
  <p>现代的千兆以太网完全由交换机控制，因此也不再需要上述的 CSMA/CD 协议。同时，使用某种我不甚了解的技术，可以在1对双绞线上同时收发（可能类似模拟电话的双向通话？），即全双工。如果使用万兆以太网6.25bit/Hz的编码，在4对标定100MHz的5类线上，传输速度可达6.25*4*100M=2.5G。</p>`,internet:`<h1>互联网（前篇）</h1>
  <p>总是在说快远离互联网，可要是连互联网是什么都不知道的话不就太可怜了么。</p>
  <h2>双绞线</h2>
  <p>怎么在两台电脑之间互传数据？最简单的方法大概是找根线把它们连起来。当然对于很远的情况，可能需要2根线————就像输电也至少需要火线和零线那样。</p>
  <p>连起来之后怎么传输数据？最容易想到的就是用高低电平来表示0和1，可惜行不通。CPU有时钟信号，但想用一对线上的高低电平传输数据会遇到各种问题：</p>
  <ul>
  <li>1ms的高电平，是1bit的1还是100bit的1？</li>
  <li>1ms的低电平，是一串0还是无事发生？</li>
  </ul>
  <p>于是我们需要同步信号的方法，识别数据开始与结束的标志，以及某种编码系统来表示这些。很遗憾 IEEE 的标准不像 RFC 是公开的，所以我也是一知半解，简要地说大概是：</p>
  <ol>
  <li>数据开始时有 Preamble (56bit的0-1交替，即7个0x55) 和 SFD (0xD5) 用于同步时钟和标记开始。</li>
  <li>使用某种编码系统（比如<a href="https://en.wikipedia.org/wiki/4B5B">4B5B</a>）以便无歧义地解码。</li>
  <li>编码的冗余提供了额外的符号用以表示结束，空闲，无信号等等。</li>
  </ol>
  <p>现在就可以将数据从一端传到另一端了。顺便一提，将这一对线绞在一起可以抵消相当的电磁干扰，所以自从上古的模拟电话开始便使用双绞线作为数据线了。</p>
  <h2>以太网</h2>
  <p>那么又如何完成双向传输？如果实在懒得出门再买一根线，就只能从软件上下手，通过调度让双方可以无冲突地通信。方法有点像通过无红绿灯控制的路口：</p>
  <ol>
  <li>开始发送前先进行观察，如果线路空闲则开始。</li>
  <li>否则等待随机的时间再开始，避免再次冲突。</li>
  <li>如果发送的时候检测到冲突，就立即停止，也等待一个随机的时间再试。</li>
  <li>每次失败大致加倍等待时间（但仍是随机的），直到忍无可忍，报错结束。</li>
  </ol>
  <p>这套算法叫<a href="https://en.wikipedia.org/wiki/Carrier-sense_multiple_access">CSMA/CD</a>，有了它便可以在单一介质上进行双向（半双工）通信。当然事实上超过2台设备也是可以的，这时双绞线变成了总线。据说远古的上网方式便是用一种钳子钳进一根超粗的铜线，当然我是没有见过。</p>
  <p>这种多台设备共享同一介质通信的概念有点像假想的电磁波介质“以太”，于是被称作以太网。</p>
  <h2>交换机</h2>
  <p>现在只要把世界上的所有设备都连到同一个“以太网”上，英特纳雄耐尔不就实现了？想得美。不难想象，这样的总线结构效率十分低下，一人说话全员坐牢。想要同时收发，必然要增加介质的数量————一人一条网线怎么样？不连接到总线，而是连到某种奇妙的设备，可以智能地交换数据，这样神奇的设备就暂时叫它交换机好了。</p>
  <p>网线上的数据没有名字。想要知道交换到哪里，我们需要一个唯一的编号来识别自己，这就是大名鼎鼎的MAC地址。简单来说就是48位二进制，前24位由 IEEE 分配给厂商，后24位由厂商保证唯一性，全世界范围内也独一无二。而交换机只需维护一个地址到物理接口的表格，收到数据时查表根据目标地址转发即可。如果找不到，则向所有人广播这段数据，等待正确的接收者回复，这时就可以记录下它的位置，不必再广播了。</p>
  <p>这么复杂的系统似乎很容易出错？那就加上错误校验吧。有种叫做<a href="https://en.wikipedia.org/wiki/Cyclic_redundancy_check">CRC</a>的校验码可以高效地检测错误。于是，数据的结构（叫做帧）变成了这样：</p>
  <p>目标MAC - 源MAC - 协议号 - 数据 - 校验码</p>
  <p>之所以把校验码放在最后是因为CRC本质是某种除法的余数，放在最后就简化成了验证整个帧是否能被除数整除，可以很高效地计算。这里使用的是CRC-32，可以检查出多达连续32位的错误，但是并不能简单地加以修复，所以没有通过验证的话，就只能丢掉了。</p>
  <p>到此为止，我们有了任意两台设备间的可靠连接，结束了？</p>
  <h2>补充说明</h2>
  <h3>千兆以太网</h3>
  <p>现代的千兆以太网完全由交换机控制，因此也不再需要上述的 CSMA/CD 协议。同时，使用某种我不甚了解的技术，可以在1对双绞线上同时收发（可能类似模拟电话的双向通话？），即全双工。如果使用万兆以太网6.25bit/Hz的编码，在4对标定100MHz的5类线上，传输速度可达6.25*4*100M=2.5G。</p>`,internet2:`<h2>普瑞巴林</h2>
  
 
  <h3>药物作用</h3>
  
  普瑞巴林(Pregabalin, PR) 是抗癫痫药、外周神经止痛药、纤维肌止痛药，属于去焦虑剂、兴奋剂[1]、解离麻醉剂。普瑞巴林本身就是一种酸，即(S)-3-(氨甲基)-5-甲基己酸，一般配置成胶囊，即普瑞巴林胶囊。由于读音关系，普瑞巴林俗称pr80</p>

另外，如果你打算初次od普瑞巴林，请先看：报告32-普瑞巴林它把我逼到了自殺的地步。。该报告讲述了一切关于普瑞巴林的副作用</p>

 <h3>药理作用</h3>
 <h3>作用机理</h3>

    抑制内流：Ca2+（由此引发以下作用）</p>
    抑制释放：乙酰胆碱/ACh</p>
    抑制释放：谷氨酸/Glu</p>
    抑制释放：P物质/SP/Substance P</p>
    抑制释放：正肾素/NE</p>
    间接提高水平：GABA</p>

<h3>药物作用</h3>

    主要的副作用：成瘾、阿兹海默症、认知降低、焦虑、噩梦、晕迫、胃溃疡【此项并不完善】</p>
    急性的副作用：记忆力衰退</p>
    主要的主作用：社交能力提升</p>
    急性的主作用：去除焦虑、兴奋、解离、镇静</p>

<h3>药代动力学</h3>

普瑞巴林在体内几乎不代谢，并处于原形以肾排泄</p>

普瑞巴林的口服生物利用度估计不小于90%。空腹服用时，普瑞巴林吸收迅速，1h ~ 1.5h内，血药浓度达到峰值；若非空腹服用，则吸收率降低，导致延迟约3h后，血药浓度才达到峰值，并且峰值水平降低约25% ~ 30%。尽管这对吸收程度没有明显影响</p>

普瑞巴林的消除半衰期为6.3h</p>

停药后，耐受性会在7~14天内恢复到基线</p>

另外，普瑞巴林虽然化学结构与GABA相似（普瑞巴林又名β-异丙基GABA），但并不能直接调控GABA水平</p>

<h3>药物使用</h3>

<h3>药物品牌</h3>

普瑞巴林胶囊【单方制剂】——</p>
　　齐鲁：盒装75mg×4板×每板8片，价格约15元</p>
　　万玮：盒装75mg×8片，价格约13元</p>
　　赛维：盒装75mg×10片，价格约33元</p>
　　乐瑞卡：盒装75mg×8片，价格约52元</p>
剂量 【以60kg，75mg为1t，无耐药性为标准】</p>

医学剂量：1t~2t，每日三次</p>
起效剂量：3t~4t</p>
轻度剂量：4t~6t</p>
中度剂量：6t~8t</p>
高度剂量：8t~12t</p>
重度剂量：12t~16t</p>
死亡剂量：【缺少数据】</p>
推荐剂量：6t或8t</p>
最高剂量：16t</p>
期间 【以距离服药已过去的时间为标准】</p>

起效时：15min~30min</p>
来效时：30min~2h</p>
顶峰时：2h~3h</p>
退效时：3h~6h</p>
残效时：6h~12h</p>
总效时：5h~8h</p>

    需注意，体重不同剂量不同，上述剂量是针对60kg的人的。你的体重除以60，再乘以上述之中的剂量，即为适应你的剂量</p>

普瑞巴林，兴奋或抑制？成瘾？</p>

兴奋上，普瑞巴林可以去除焦虑，包括社会性焦虑，则引起去抑制，令人变成社交达人；镇静上，普瑞巴林可以引起解离、GABA镇静、抗躁狂，则令人冷静下来。这两者似乎并不冲突。因此，普瑞巴林可能是镇静地兴奋，在镇静地做事同时，又变得比以前大胆——因为社会性焦虑降低，导致服药者不太考虑做事的后果。这是需要考虑的地方【垃圾理论推导可能有误】</p>

据多方报告，普瑞巴林存在体瘾。按笔者的乱推测：SP传递焦虑，而普瑞巴林抑制SP的释放，则可以类比阿片类成瘾——药效之后，机体开始依赖于以普瑞巴林减除SP，难以自己减除SP，产生用进废退。导致SP物质无法被机体自己减除，则SP会水漫金山[6]，焦虑漫溢，引起再服药欲望。不排除有其他成瘾缘由</p>

一些事项</p>

普瑞巴林似乎没有什么需要额外反制的问题，除了成瘾</p>

od普瑞巴林时，服药前六个小时到服药后两个小时内（T-6h~T+2h）不能食用固体，否则会导致药效减弱。但必须喝液体，防止胶囊化不开……什么什么食物笔者自己都不知道在说些什么，总之就那样就对了</p>

据报告，一名服药者首次空腹服用普瑞巴林后，药效大到服药者发誓，再也不吃普瑞巴林了。自己不空腹，吃那么多普瑞巴林，结果还要怪药效小？简直是乱来！</p>

由于普瑞的药效与焦虑挂钩，且就目前接受的报告来看，越是焦虑的人，服用普瑞的药效就会越好，成瘾能力也会越强</p>

大量报告证实，普瑞巴林不能和金刚烷胺联用，否则会发生极其危险的事故。请不要尝试联用二者，或在其中一种药物退效后短时间内立即使用另一种。详见药物联用</p>

<h3>一些趣事吧</h3>

（由于笔者认识有限，难免叙述出现差错缺漏。欢迎补充）
据报告：</p>

    普瑞巴林的成瘾性太大了！</p>
    五常只有中国没有很严格地管控普瑞巴林，其他国家管得都很严格</p>
    似乎普瑞巴林最开始是用来辅助用药的</p>
    普瑞巴林的话8t就够了！只要空腹</p>
    可以听见远方传来的歌声</p>
    普瑞戒待因，越戒越牛逼！</p>
    饿死你</p>
    普瑞巴林儿童版：加巴喷丁</p>

    这一点很需要打上问号。普瑞巴林抑制钙离子内流，抑制了一大堆神经递质，结果却是兴奋剂？于此，我的分类只是按照经验罢了 </p>

    这一条作用虽然很奇怪，但被人证实是存在的</p>

    这一条作用虽然像是错的，但可能真就一个样 </p>

    自相矛盾，为什么一边兴奋一边镇静？ </p>

    <a href="https://www.nmpa.gov.cn/yaopin/ypggtg/20221130200847133.html">《psiwiki》</a> 

    谁教你这么用成语的，波奇？</p>
  `,recovering:`<h2>可待因</h2>

   <h2> 可待因为阿片类药物，具有最恐怖的阿片类成瘾。尽管可待因的作用程度较低，成瘾效率不大，但仍请警惕</h2>

可待因(Codeine, CDI) 是成瘾性中枢止咳药，属于阿片类麻醉剂。更多地以磷酸配合物，即磷酸可待因。化学上可称作3-甲基吗啡，这预示了可待因其实是吗啡的前药</p>


<h3>药理作用</h3>

<h3>作用机理</h3>

    阿片类麻醉</p>

<h3>药物作用</h3>

    主要的副作用：阿片类成瘾、记忆力废退、注意力涣散、严重嗜睡</p>
    急性的副作用：阿片类中毒、便秘、呼吸抑制、昏迷昏睡、恶心</p>
    主要的主作用：阿片类麻醉、幸福感、梦境增强、欣快感</p>

<h3>药代动力学</h3>

可待因具有与右美沙芬相似的代谢机制。可待因本身近乎无效，约10%经CYP2A6代谢为有效产物吗啡，其余经CYP3A4代谢为近乎无效的产物N-去甲可待因。前者就是可待因药效的缘由。代谢快慢，似乎对可待因最终的药效影响不大</p>

也就是说，可待因本身不起作用，全靠代谢出来的吗啡起作用。因此可以说，可待因是10%的吗啡，可待因等价吗啡</p>

抑制CYP3A4的西柚汁，同样也能增强可待因的药效，因为于此，有更多的可待因转化为了吗啡。但抑制CYP2A6的SRIs等药物，则可能完全抑制可待因转化为吗啡，使药效无效化。这可能是有些人员od可待因没有药效的原因</p>

可待因的半衰期为2.5~3小时[2]，一般取3小时。约1小时，血药浓度达到峰值</p>

<h3>药物使用</h3>



单方制剂——</p>

    磷酸可待因片：盒装15mg×每板10片×2板，价格不明</p>
    磷酸可待因片：盒装15mg×每板10片×2板，价格不明</p>

复方制剂——【罄竹难书】</p>

    紫水：可待因止咳水混雪碧混糖</p>
    复方磷酸可待因糖浆</p>
    复方磷酸可待因口服溶液（大力哥喝的玩意）</p>
    氨酚待因片（I）：盒装8.4mg×每板10片×2板，价格不明</p>
    　　每片成分：磷酸可待因8.4mg、扑热息痛0.5g</p>
    氨酚待因片（II）：盒装15mg×每板12片×2板，价格不明</p>
    　　每片成分：磷酸可待因15mg、扑热息痛0.3g</p>
    复方磷酸可待因片：盒装8.4mg×每板12片×2板，价格不明</p>
    　　每片成分：磷酸可待因10mg、盐酸苯海拉明5mg、扑热息痛0.4g、无水咖啡因50mg</p>
    洛芬待因片：盒装13mg×每板10片×2板，价格不明</p>
    　　每片成分：磷酸可待因13mg、布洛芬0.2g</p>
    可待因桔梗片【西可奇】：盒装12mg×每板10片×1板，价格不明</p>
    　　每片成分：磷酸可待因12mg、桔梗流浸膏50mg</p>
    爱斯咳朗【台版白兔BRON】：盒装2.4mg×每板10片×2板，价格不明</p>
    　　每片成分：磷酸可待因2.4mg、盐酸甲麻黄碱(25/3≈8.3)mg、马来酸氯苯那敏(4/3≈1.3)mg、无水咖啡因15mg</p>

剂量 【以60kg，无耐药性，无联合药物为标准】[3]</p>

由于可待因是10%的吗啡，故可待因的剂量，直接是吗啡的1/10。</p>

医学剂量：基本上是一片到两片，每日三四次</p>
起效剂量：30mg~50mg</p>
轻度剂量：50mg~100mg</p>
中度剂量：100mg~150mg</p>
高度剂量：150mg~200mg</p>
重度剂量：200mg以上</p>
致死剂量：200mg以上。已知2000mg至少是致死剂量</p>
高剂量：80mg或100mg</p>
最高剂量：200mg</p>

期间： 【以距离服药已过去的时间为标准】【缺少数据】</p>
起效时：15min~45min</p>
顶峰时：1h~1.5h</p>
残效时：24h</p>
总效时：3h~6h</p>

    需注意，体重不同剂量不同，上述剂量是针对60kg的人的。你的体重除以60，再乘以上述之中的剂量，即为适应你的剂量。</p>

<h3>一些事项</h3>

由于可待因的代谢产物就是吗啡，因此会吗啡阳性。被尿检查出来就纠缠不清了。请谨慎对待可待因</p>

白兔BRON中含有的是二氢可待因，而不是可待因</p>

可待因引起的阿片类成瘾是无解的</p>

    也与吗啡的相近，<a href="https://en.wikipedia.org/wiki/Codeine">《wikipedia》</a><p>

<a href="https://m.psychonautwiki.org/wiki/Codeine">《psychonautwiki》</a><p>

  
  
 `,recoveri:`<h1>互联网（前篇）</h1>
  <p>总是在说快远离互联网，可要是连互联网是什么都不知道的话不就太可怜了么。</p>
  <h2>双绞线</h2>
  <p>怎么在两台电脑之间互传数据？最简单的方法大概是找根线把它们连起来。当然对于很远的情况，可能需要2根线————就像输电也至少需要火线和零线那样。</p>
  <p>连起来之后怎么传输数据？最容易想到的就是用高低电平来表示0和1，可惜行不通。CPU有时钟信号，但想用一对线上的高低电平传输数据会遇到各种问题：</p>
  <ul>
  <li>1ms的高电平，是1bit的1还是100bit的1？</li>
  <li>1ms的低电平，是一串0还是无事发生？</li>
  </ul>
  <p>于是我们需要同步信号的方法，识别数据开始与结束的标志，以及某种编码系统来表示这些。很遗憾 IEEE 的标准不像 RFC 是公开的，所以我也是一知半解，简要地说大概是：</p>
  <ol>
  <li>数据开始时有 Preamble (56bit的0-1交替，即7个0x55) 和 SFD (0xD5) 用于同步时钟和标记开始。</li>
  <li>使用某种编码系统（比如<a href="https://en.wikipedia.org/wiki/4B5B">4B5B</a>）以便无歧义地解码。</li>
  <li>编码的冗余提供了额外的符号用以表示结束，空闲，无信号等等。</li>
  </ol>
  <p>现在就可以将数据从一端传到另一端了。顺便一提，将这一对线绞在一起可以抵消相当的电磁干扰，所以自从上古的模拟电话开始便使用双绞线作为数据线了。</p>
  <h2>以太网</h2>
  <p>那么又如何完成双向传输？如果实在懒得出门再买一根线，就只能从软件上下手，通过调度让双方可以无冲突地通信。方法有点像通过无红绿灯控制的路口：</p>
  <ol>
  <li>开始发送前先进行观察，如果线路空闲则开始。</li>
  <li>否则等待随机的时间再开始，避免再次冲突。</li>
  <li>如果发送的时候检测到冲突，就立即停止，也等待一个随机的时间再试。</li>
  <li>每次失败大致加倍等待时间（但仍是随机的），直到忍无可忍，报错结束。</li>
  </ol>
  <p>这套算法叫<a href="https://en.wikipedia.org/wiki/Carrier-sense_multiple_access">CSMA/CD</a>，有了它便可以在单一介质上进行双向（半双工）通信。当然事实上超过2台设备也是可以的，这时双绞线变成了总线。据说远古的上网方式便是用一种钳子钳进一根超粗的铜线，当然我是没有见过。</p>
  <p>这种多台设备共享同一介质通信的概念有点像假想的电磁波介质“以太”，于是被称作以太网。</p>
  <h2>交换机</h2>
  <p>现在只要把世界上的所有设备都连到同一个“以太网”上，英特纳雄耐尔不就实现了？想得美。不难想象，这样的总线结构效率十分低下，一人说话全员坐牢。想要同时收发，必然要增加介质的数量————一人一条网线怎么样？不连接到总线，而是连到某种奇妙的设备，可以智能地交换数据，这样神奇的设备就暂时叫它交换机好了。</p>
  <p>网线上的数据没有名字。想要知道交换到哪里，我们需要一个唯一的编号来识别自己，这就是大名鼎鼎的MAC地址。简单来说就是48位二进制，前24位由 IEEE 分配给厂商，后24位由厂商保证唯一性，全世界范围内也独一无二。而交换机只需维护一个地址到物理接口的表格，收到数据时查表根据目标地址转发即可。如果找不到，则向所有人广播这段数据，等待正确的接收者回复，这时就可以记录下它的位置，不必再广播了。</p>
  <p>这么复杂的系统似乎很容易出错？那就加上错误校验吧。有种叫做<a href="https://en.wikipedia.org/wiki/Cyclic_redundancy_check">CRC</a>的校验码可以高效地检测错误。于是，数据的结构（叫做帧）变成了这样：</p>
  <p>目标MAC - 源MAC - 协议号 - 数据 - 校验码</p>
  <p>之所以把校验码放在最后是因为CRC本质是某种除法的余数，放在最后就简化成了验证整个帧是否能被除数整除，可以很高效地计算。这里使用的是CRC-32，可以检查出多达连续32位的错误，但是并不能简单地加以修复，所以没有通过验证的话，就只能丢掉了。</p>
  <p>到此为止，我们有了任意两台设备间的可靠连接，结束了？</p>
  <h2>补充说明</h2>
  <h3>千兆以太网</h3>
  <p>现代的千兆以太网完全由交换机控制，因此也不再需要上述的 CSMA/CD 协议。同时，使用某种我不甚了解的技术，可以在1对双绞线上同时收发（可能类似模拟电话的双向通话？），即全双工。如果使用万兆以太网6.25bit/Hz的编码，在4对标定100MHz的5类线上，传输速度可达6.25*4*100M=2.5G。</p>`,Introduction:`<h1>右美沙芬</h1>
  <ol>
 <h3>恭喜！2024.05.07，一个几乎从未在精神科露面的药物，现今已经跨越为精二了！为我们的小美庆祝！阶级跨越！</h3>
  <p>右美沙芬(Dextromethorphan, DXM) 是非成瘾性中枢止咳药，属于解离麻醉剂与抗抑郁剂。一般以氢溴酸配合物，即 氢溴酸右美沙芬。由于读音相近与文化，右美沙芬俗称 优美、野猫上坟、美莎等多种别称<p>
  
  无论是医学上还是od上，右美沙芬没有任何替代品<p>

</h3>药理作用 <h3><p>

抑制再摄取：血清素/STN<p>

拮抗受体：NMDA（非竞争性）<p>

激动受体：σ-1/Sigma-1<p>
 
 负变构受体：烟碱乙酰胆碱/nAChR<p>
 
 <h4> 作用</h4>
 
 
急性的副作用：血清素综合征、急性躁狂、脱水、呼吸抑制、脱离、嗜睡、呕吐、晕迫<p>
  
 主要的主作用：解离、SRI抗抑郁<p>
  
急性的主作用：音乐欣赏力提高、非常轻微的阿片类麻醉<p>
在法律意义上，上述不同。一般地，od是合法的，滥用药物可能是非法的<p>

</h3> 药代动力学<h3><p>

右美沙芬具有复杂的代谢、耐受性质<p>

右美沙芬在体内会进过三种酶而代谢，并以肾经尿排泄。约2小时，血药浓度达到峰值。半衰期为3.4~5.6小时，一般取3.4小时。因耐受性，半衰期可达到20小时[2]<p>


    <img src="./image/dxm-metabolism.jpg" alt="dxm-metabolism" />

</h3>耐受<h3><p>

右美沙芬具有奇怪的耐药性。它很容易产生很大很大很大的耐药性<p>

天生耐受性：因人种、基因、CYP2D6的基因表达不同，天生对右美沙芬的耐药性也不同。由此分类为慢速代谢、中速代谢、快速代谢。尤其是欧洲白种人群，慢速代谢者的频发率为5%~10%，而中国汉族人群，慢速代谢者的频发率为0.76%<p>

后天耐药性：服药会产生耐药性，剩下的不用多说。需注意的是，右美沙芬的耐药性之增长，非常快速。据报告，到后期，耐药下的72t也仅仅等同于未耐药下的24t<p>

停药后，耐受性需要约7天以减少一半，由此可知，耐受性需要两个月以恢复至基线<p>

在杀伤力上，上述略微不同。一般地，平均杀伤可逆程度排布为：od药物 < 被滥用的药物 < 毒品<p>

总得来说，为了防止小题大做与处理问题的麻烦，分离开三者是有必要的</li>
  
 <h3>药物品牌</h3>
  
 氢溴酸右美沙芬片【单方制剂】——<p>
　　白云山（经典橙）：盒装15mg×每盒2板×每板12片，价格为14元（olaiya）<p>
　　白云山（白背景）：盒装15mg×每盒1板×每板12片，价格约6元<p>
　　宛衡：盒装15mg×每盒1板×每板24片，价格不明<p>
　　中大：盒装15mg×每盒1板×每板24片，价格不明<p>
　　华南：盒装15mg×每盒1板×每板12片，价格不明<p>

   氢溴酸右美沙芬分散片【单方制剂】——<p>

　　可乐尔：盒装15mg×每盒2板×每板12片，价格为不明<p>


愈美片【复方制剂】——<p>

　　云药：盒装15mg×每盒2板×每板12片，价格约12元<p>

　　新康泰克：盒装15mg×1板×每板12片，价格约20元<p>


国内的氢溴酸右美沙芬糖浆似乎含有催吐剂，请不要用它<p>


<h3>剂量【以60kg，平均地无耐药性，无联合药物为标准】</h3>

右美沙芬有着特殊的剂量称呼。我们将这个系统称为西格玛高原，各个药效称为第几高原<p>

<h3>医学剂量：1t~2t，每日三次</h3>

    什么都不会发生。右美沙芬只是个很好用的止咳药<p>
    
    
    <h3> 第一高原：6t~12t</h3>
        精神作用初见端倪<p>
    开始出现抗抑郁作用<p>
    解离不会很明显，但是可以察觉出一点点作用<p>
    需注意，有些人服用到这个剂量时，可以直接达到第三高原药效。笔者收到过一个报告，12t右美沙芬致死<p>



<h3>第二高原：12t~24t</h3>

    精神作用开始显著<p>
    解离开始出现，去抑制将伴随出现<p>
    抗抑郁逐步提升<p>
    躁狂可能不会很明显，会出现难以入睡的情况<p>
    运动增益将随之出现<p>
    长期od右美沙芬的人员，就算不od，解离水平也会固着于第二高原<p>

<h3>第三高原：24t~48t</h3>

    精神作用非常显著<p>
    解离、去抑制非常明显。感知与认知将被解离<p>
    运动增益非常大，大到无法感到累<p>
    抗抑郁非常明显，可观察到躁狂。（单方使用的话）几乎睡不着<p>
    第三高原是在安全的前提下，药效最大的高原。非常建议寻求心理安慰的人员服用该平台的剂量<p>

<h3>第四高原：48t~84t</h3>

第四高原是第三高原的逐步增强。随剂量升高——<p>

    解离程度将逐步达到麻醉手术水平。从意识模糊、疼痛减少、感知认知下降，到意识丢失、疼痛丧失、感知认知消失。<p>
    肢体将逐步无法操控，从步态机械，动作倚靠自主运行，到高度瘫痪。<p>
    抗抑郁效果也会因过强，而引起血清素综合征，躁狂会与血清素综合征混合而起<p>
    例如高血压、呼吸暂停、心跳骤停，药理性死亡风险将逐步攀升。而在第三高原，最可能的死因只会是呕吐造成窒息而死<p>
    去抑制因为解离造成了认知下降，而开始下滑。<p>

第五高原：84t~120t（理论数据，并非真实服药剂量）</h3>

第五高原的概念类似极限∞，只是被假设在第四高原之上，还存在着一个第五高原<p>

    药效最为剧烈也最为不可测<p>
    第五高原的药效，被描述为第四高原的最顶<p>
    所有感知全部消失，感知被内部幻觉所接替，服药者完全瘫痪，出现濒死体验，后遗症也长得离谱<p>
    有特殊的分次服用方法可以达到第五高原，而不是纯粹叠量。高量美金刚的药效，可能靠近第五高原，但这也不是od美金刚的缘由吧！<p>
    第五高原的药效，一切都是不可测的，死亡风险极大，几乎就是自杀来的。专业人员也不要尝试！<p>

    ⚠️ 第五高原补充及注意事项⚠️ </h3> <p>

    经实验报告数据与统计，有少数测试人员进行过第五高原反应测试（数据补充）</h3><p>

    第五高原被描述为“无知觉的意识分离”与「接近上帝视角的空间与时间概念的体验」被测试人员说描述为最开始体验会极度的舒适与平和，但后面会带来极度的痛苦与疼痛，「精神层面」与「生理层面」都被描述为极度的痛苦，在第五高原反应（猜测）时被测试者描述为「通道」「光线」与「接近神的意识」，目前被猜测为是一种极端的濒死体验，但经过多轮测试，被测试者的第五高原反应均为同一体验，甚至毫无差距，但在第五高原后伴随的便是药物中毒反应，被测试者也送医进行抢救⚠️非专业人员切勿尝试⚠️也请各位留意千万不要这样伤害自己</h3><p>


其他剂量</h3>

死亡剂量：从第四高原开始，死亡概率逐步攀升。120t以上，死亡概率极大<p>
推荐剂量：4t ~ 12t或可能是18t ~ 30t<p>
最高剂量：60t<p>

    右美沙芬被测试后得出结论：在16t≤剂量≤(28t~30t)时，将6～8t左右的剂量替换为普瑞巴林，可抑制od右美沙芬带来的神经性疼痛、抽搐以及降低od过量风险的作用。但不建议也不倡导任何形式的混合药剂od，请各位注意这只是数据补充，切勿尝试<p>

期间 【以距离服药已过去的时间为标准】</h3>

起效时：40min~1h<p>
来效时：1h~1.5h<p>
顶峰时：1.5h~2.5h<p>
退效时：2.5h~3.5h<p>
残效时：3.5h~8h<p>
总效时：8h~12h<p>

    需注意，体重不同剂量不同，上述剂量是针对60kg的人的。你的体重除以60，再乘以上述之中的剂量，即为适应你的剂量。
    不同人有对右美沙芬不同的天生耐药性。如果你非要od，请逐步爬升剂量地服用右美沙芬<p>

    笔者认为，只会叠量的纯纯是XX<p>

一些事项</h3>

右美沙芬是od的起源，仅限od<p>

右美沙芬是全体od药物中，生理副作用最小的药物<p>

在没有足够的了解下，不要将右美沙芬与任何抗抑郁药进行联用<p>

虽然右美沙芬的化学结构与吗啡相似，但两者完全是两种药效。请不要混淆视听<p>

右美沙芬引起撤药反应，请使用氟伏沙明等SSRI抗抑郁药进行接替，然后慢慢减少剂量……<p>

氢溴酸右美沙芬引起呕吐，初步认为是因为氢溴酸的刺激，请吃一些食物垫垫肚子，并不要喝太多液体。另外，据多方报告，茶水是右美沙芬的强力催吐剂，作用机理不清楚。因此，服用右美沙芬后，若需要催吐，请喝下浓茶水，并再喝下很多水，如此呕吐类似于洗胃<p>

关于右美沙芬的过度服用引发的中毒反应，首先立刻考虑就医情况<p>
历史</h3>

（由于笔者认识有限，难免叙述出现差错缺漏。欢迎补充）<p>

那是 <a href="https://www.nmpa.gov.cn/yaopin/ypggtg/20221130200847133.html">《药品网络销售禁止清单第一版》</a>



之前——站内拷贝文在这里，不管是二类还是三类，甚至是一类，有很多很多的人，没有任何阻碍地走进了右美沙芬药效里……那时的右美沙芬非常便宜，在网上什么药厂的都有，30t一盒只需要6元。</br> 

首先是<a href="https://www.bilibili.com/video/BV1RW4y1y7Z5/">《圈内师老师的视频》</a>，其次是看起来像是心理学视频作者的<a href="https://www.bilibili.com/video/BV1sF411w7BZ/">《视频》</a>，<a href="https://www.bilibili.com/video/BV11a411d7w5/">《底层原理》</a>的“背刺”，最后<a href="https://www.bilibili.com/video/BV1Nd4y1R7ym/">《广州禁毒》</a>也开始入场。最终的结局便是在2022.11.30，《禁止清单》出现了<p>

《禁止清单》好吗？笔者想说它不仅好，还是非常优质的举措。如果你看过引论中的分类，那你就更能理解：一或二类人员“试试看”的心态被这一张禁令所阻止，停止在第一次尝试之前。至于三类人员的话，都到三类情况了，哪还顾得上？不该吃的人拦下来了，该吃的人终究拦不住。《禁止清单》减少了各种人员的第一次尝试，具有良好的作用<p>

热度退去，但滥用从未停止。从右美沙芬被禁止售卖所出发，并不禁止的金刚烷胺与苯海索，美金刚与普瑞巴林又被挖掘出来而滥用，然而它们前三者吃起来不仅没有任何欣快感，还很痛苦，只有致幻剂的功效能支撑它们被滥用的意义，后者普瑞巴林虽然有欣快感作用，但它的药物使用玄乎其玄非常古怪，药效也更加因人而异。再也没有一个药物能复刻右美沙芬的成功了。而除开od圈子里头，在笔者所接触的平常的爱好圈子中，越来越多从前看起来和od毫无相关的人开始od起来，一幅沧海桑田的景色就在眼前<p>

广州已经出现右美沙芬尿检纸了，真是下有下策上有对策<p>

好好好现在是2024.05.07，右美沙芬已经跨越为精二了可喜可贺<p>

    除此之外还有一些可能根本不正确的：<p>
    可能引发释放：组胺/HI（存疑。可能根本不正确）<a href="https://en.wikipedia.org/wiki/Dextromethorphan">《wikipedia》</a><p>
    可能抑制再取：正肾素/NE（存疑。对NE转运蛋白具有潜在亲和力，但无药理学价值）<p>
   

    中大右美沙芬说明书。另外据说，安非他酮可将右美沙芬的半衰期延长至20小时<p>

    李国昌，陈 勇，陈文，等. 中国汉族、维吾尔族、哈萨克族右美沙芬氧化代谢多态性表型研究[J]. 中国临床药理学杂志,2004,20(2):104-108 <p>

    <a href="https://m.psychonautwiki.org/wiki/Dextromethorphan">《psywiki》</a><p>↩︎



`}
const urlConfig = {'pasta.html': 'pasta.html'};
let windowId = 0;

function prepareDom() {
    const template = document.createElement('template');
    template.innerHTML = `
        <div class="arena">
            <div class="desktop"></div>
            <div class="bar">
                <div class="start"></div>
                <div class="taskbar"></div>
                <div class="status"></div>
                <div class="menu">
                    <div class="ribbon"></div>
                    <div class="list"></div>
                </div>
            </div>
        </div>`;
    
    const startLogo = '★コネクト';
    for (let i = 0; i < startLogo.length; i++) {
        const span = document.createElement('span');
        span.textContent = startLogo[i];
        template.content.querySelector('.start').appendChild(span);
    }

    template.content.querySelector('.start').addEventListener('click', (ev) => {
        const startMenu = document.querySelector('.menu');
        if (!startMenu.style.display || startMenu.style.display == 'none') {
            startMenu.style.display = 'grid';
            document.querySelector('.start').classList.add('active');
        } else {
            startMenu.style.display = 'none';
            document.querySelector('.start').classList.remove('active');
        }
    }, false);

    document.body.appendChild(template.content);
}

function putWindowOnTop(window) {
    const allWindows = document.querySelectorAll('.window');
    for (const w of allWindows) {
        if (w.style.zIndex > window.style.zIndex) {
            w.style.zIndex--;
        }
    }
    window.style.zIndex = allWindows.length;
    const activeTask = document.querySelector('.bar>.taskbar>.task.active');
    if (activeTask) {
        activeTask.classList.remove('active');
    }
    document.getElementById(`t${window.id.slice(1)}`).classList.add('active');
}

function makeWindow(title, style) {
    const template = document.createElement('template');
    template.innerHTML = `
        <div class="window">
            <div class="header">
                <div class="title">${title}</div>
                <div class="button minimize"></div>
                <div class="button maximize"></div>
                <div class="button close"></div>
            </div>
            <div class="content"></div>
        </div>`;
    
    const divWindow = template.content.querySelector('.window');
    divWindow.id = `w${windowId}`;
    windowId++;
    for (const s of style) {
        divWindow.classList.add(s);
    }
    divWindow.style.zIndex = document.querySelectorAll('.window').length + 1;
    divWindow.addEventListener('mousedown', (ev) => { putWindowOnTop(divWindow); });

    const lastCoord = { x: 0, y: 0 };
    const divTitle = template.content.querySelector('.title');
    function dragFn(ev) {
        const x = Math.round(ev.clientX);
        const y = Math.round(ev.clientY);
        divWindow.style.left = `${divWindow.offsetLeft + x - lastCoord.x}px`;
        divWindow.style.top = `${divWindow.offsetTop + y - lastCoord.y}px`;
        lastCoord.x = x;
        lastCoord.y = y;
        divWindow.classList.add('dragging');
    }
    
    divTitle.addEventListener('pointerdown', (ev) => {
        if (divWindow.classList.contains('maximized')) { return; }
        lastCoord.x = Math.round(ev.clientX);
        lastCoord.y = Math.round(ev.clientY);
        divTitle.setPointerCapture(ev.pointerId);
        divTitle.addEventListener('pointermove', dragFn);
    });

    divTitle.addEventListener('pointerup', (ev) => {
        if (divWindow.classList.contains('maximized')) { return; }
        divWindow.classList.remove('dragging');
        divTitle.removeEventListener('pointermove', dragFn);
    });

    template.content.querySelector('.minimize').addEventListener('click', (ev) => {
        document.getElementById(`t${divWindow.id.slice(1)}`).classList.remove('active');
        divWindow.style.display = 'none';
    });

    function maximizeFn(ev) {
        if (divWindow.classList.contains('maximized')) {
            divWindow.classList.remove('maximized');
        } else {
            divWindow.classList.add('maximized');
        }
    }

    template.content.querySelector('.maximize').addEventListener('click', maximizeFn);
    divTitle.addEventListener('dblclick', maximizeFn);

    template.content.querySelector('.close').addEventListener('click', (ev) => {
        document.getElementById(`t${divWindow.id.slice(1)}`).remove();
        divWindow.remove();
    });

    return divWindow;
}

function createWindow(title, content, config) {
    const style = config && config.style ? config.style : [];
    const divWindow = makeWindow(title, style);
    if (content) {
        divWindow.children[1].appendChild(content);
    }
    document.querySelector('.desktop').appendChild(divWindow);
    divWindow.style.left = `${Math.floor(0.5 * Math.random() * (document.querySelector('.arena').offsetWidth - divWindow.offsetWidth))}px`;
    divWindow.style.top = `${Math.floor(0.33 * Math.random() * (document.querySelector('.arena').offsetHeight - divWindow.offsetHeight))}px`;

    const divTask = document.createElement('div');
    divTask.id = `t${divWindow.id.slice(1)}`;
    divTask.classList.add('task');
    divTask.textContent = title;
    divTask.addEventListener('click', (ev) => {
        divWindow.style.display = 'grid';
        putWindowOnTop(divWindow);
    });
    document.querySelector('.taskbar').appendChild(divTask);
    putWindowOnTop(divWindow);
    return divWindow;
}

function execute(key, action) {
    let name = key;
    if (action.name) {
        name = action.name;
    }
    const config = {};
    if (action.style) {
        config.style = action.style;
    }
    const handler = {
        text: () => { createWindow(name, document.createTextNode(action.value), config); },
        html: () => {
            const template = document.createElement('template');
            template.innerHTML = action.value;
            createWindow(name, template.content, config);
        },
        okusuri: () => {
            let hash = action.hash;
            if (!hash) { hash = '#' + key; }
            const desc = action.desc ? action.desc : '';
            const template = document.createElement('template');
            template.innerHTML = `
                <div class="folder-meta"><span>${name}</span><span>${hash}</span></div>
                <div class="folder-desc">${desc}</div>
                <div class="folder"></div>`;
            for (const file in action.value) {
                action.value[file].hash = hash + '/' + file;
                template.content.querySelector('.folder').appendChild(makeIcon(file, action.value[file]));
            }
            createWindow(name, template.content, config);
        },
        youxi: () => {
            let hash = action.hash;
            if (!hash) { hash = '#' + key; }
            const desc = action.desc ? action.desc : '';
            const template = document.createElement('template');
            template.innerHTML = `
                <div class="folder-meta"><span>${name}</span><span>${hash}</span></div>
                <div class="folder-desc">${desc}</div>
                <div class="folder"></div>`;
            for (const file in action.value) {
                action.value[file].hash = hash + '/' + file;
                template.content.querySelector('.folder').appendChild(makeIcon(file, action.value[file]));
            }
            createWindow(name, template.content, config);
        },
        sex: () => {
            let hash = action.hash;
            if (!hash) { hash = '#' + key; }
            const desc = action.desc ? action.desc : '';
            const template = document.createElement('template');
            template.innerHTML = `
                <div class="folder-meta"><span>${name}</span><span>${hash}</span></div>
                <div class="folder-desc">${desc}</div>
                <div class="folder"></div>`;
            for (const file in action.value) {
                action.value[file].hash = hash + '/' + file;
                template.content.querySelector('.folder').appendChild(makeIcon(file, action.value[file]));
            }
            createWindow(name, template.content, config);
        },
        123: async () => {
            console.log(111111);
            const response = await fetch(`${action.value}`);
            console.log(response, 'jhgf');
            const template = document.createElement('template');
            template.innerHTML = await response.text();
            createWindow(name, template.content, config);
        },
        game: async () => {
            console.log(111111);
            const response = await fetch(`${action.value}`);
            console.log(response, 'jhgf');
            const template = document.createElement('template');
            template.innerHTML = await response.text();
            createWindow(name, template.content, config);
        },
        sese: async () => {
            console.log(111111);
            const response = await fetch(`${action.value}`);
            console.log(response, 'jhgf');
            const template = document.createElement('template');
            template.innerHTML = await response.text();
            createWindow(name, template.content, config);
        },
        url: async () => {
            console.log(111111);
            const response = await fetch(`${action.value}`);
            console.log(response, 'jhgf');
            const template = document.createElement('template');
            template.innerHTML = await response.text();
            createWindow(name, template.content, config);
        },
        twitter: async () => {
            const script = document.createElement('script');
            script.setAttribute('src', `../js/${action.value}`);
            const newWindow = createWindow(name, null, config);
            window.root = newWindow.children[1];
            newWindow.appendChild(script);
        },
        facebook: async () => {
            const script = document.createElement('script');
            script.setAttribute('src', `../js/${action.value}`);
            const newWindow = createWindow(name, null, config);
            window.root = newWindow.children[1];
            newWindow.appendChild(script);
        },
        instagram: async () => {
            const script = document.createElement('script');
            script.setAttribute('src', `../js/${action.value}`);
            const newWindow = createWindow(name, null, config);
            window.root = newWindow.children[1];
            newWindow.appendChild(script);
        },
        telegram: async () => {
            const script = document.createElement('script');
            script.setAttribute('src', `../js/${action.value}`);
            const newWindow = createWindow(name, null, config);
            window.root = newWindow.children[1];
            newWindow.appendChild(script);
        },
        bilibili: async () => {
            const script = document.createElement('script');
            script.setAttribute('src', `../js/${action.value}`);
            const newWindow = createWindow(name, null, config);
            window.root = newWindow.children[1];
            newWindow.appendChild(script);
        },
        youtube: async () => {
            const script = document.createElement('script');
            script.setAttribute('src', `../js/${action.value}`);
            const newWindow = createWindow(name, null, config);
            window.root = newWindow.children[1];
            newWindow.appendChild(script);
        },
        md: async () => {
            const response = htmlConfig[action.value];
            const template = document.createElement('template');
            template.innerHTML = response;
            createWindow(name, template.content, config);
        },
        md2: async () => {
            console.log(111111);
            const response = await fetch(`${action.value}`);
            console.log(response, 'jhgf');
            const template = document.createElement('template');
            template.innerHTML = await response.text();
            createWindow(name, template.content, config);
        },
        folder: () => {
            let hash = action.hash;
            if (!hash) { hash = '#' + key; }
            const desc = action.desc ? action.desc : '';
            const template = document.createElement('template');
            template.innerHTML = `
                <div class="folder-meta"><span>${name}</span><span>${hash}</span></div>
                <div class="folder-desc">${desc}</div>
                <div class="folder"></div>`;
            for (const file in action.value) {
                action.value[file].hash = hash + '/' + file;
                template.content.querySelector('.folder').appendChild(makeIcon(file, action.value[file]));
            }
            createWindow(name, template.content, config);
        },
        iframe: () => {
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', `${action.value}`);
            iframe.setAttribute('scrolling', 'no');
            createWindow(name, iframe, config);
        },
        js: () => {
            const script = document.createElement('script');
            script.setAttribute('src', `../js/${action.value}`);
            const newWindow = createWindow(name, null, config);
            window.root = newWindow.children[1];
            newWindow.appendChild(script);
        }
    };
    if (!handler[action.type]) { return; }
    handler[action.type]();
}

function createEntry(key, action) {
    console.log(key, action);
    let name = key;
    if (action.name) {
        name = action.name;
    }
    const divEntry = document.createElement('div');
    divEntry.classList.add('entry');
    divEntry.textContent = name;
    if (action.type) {
        divEntry.addEventListener('click', (ev) => { console.log(key, action); execute(key, action); });
    }
    document.querySelector('.list').appendChild(divEntry);
}

function makeIcon(key, action) {
    let name = key;
    if (action.name) {
        name = action.name;
    }
    let icon = 'text';
    if (action.icon) {
        icon = action.icon;
    } else if (!action.type) {
        icon = 'restrict';
    } else if (action.type == 'folder') {
        icon = 'folder';
    } else if (action.type == '123') {
        icon = '123';
    } else if (action.type == 'youxi') {
        icon = 'youxi';
    } else if (action.type == 'sex') {
        icon = 'sex';
    } else if (action.type == 'okusuri') {
        icon = 'okusuri';
    } else if (action.type == 'url') {
        icon = 'url';
    } else if (action.type == 'twitter') {
        icon = 'twitter';
    } else if (action.type == 'facebook') {
        icon = 'facebook';
    } else if (action.type == 'instagram') {
        icon = 'instagram';
    } else if (action.type == 'telegram') {
        icon = 'telegram';
    } else if (action.type == 'bilibili') {
        icon = 'bilibili';
    } else if (action.type == 'youtube') {
        icon = 'youtube';
    } else if (action.type == 'game') {
        icon = 'game';
    } else if (action.type == 'js') {
        icon = 'exe';
    }
    const template = document.createElement('template');
    template.innerHTML = `
        <div class="iconwrap">
            <div class="icon">
                <img src="./images/${icon}.png" alt="${icon}">
                <div class="tag">${name}</div>
            </div>
        </div>`;
    if (action.type) {
        template.content.querySelector('.icon').addEventListener('click', (ev) => { console.log(key, action); execute(key, action); });
    }
    return template.content;
}

function processConfig1(config, startUp) {
    for (const key in config) {
        const value = config[key];
        if (value.type == 'folder') {
            processConfig(value.value, startUp);
        }
        if (value.link) {
            for (const link of value.link) {
                if (link == 'entry') {
                    createEntry(key, value);
                } else if (link == 'icon') {
                    document.querySelector('.desktop').appendChild(makeIcon(key, value));
                }
            }
        }
        if (startUp && value.start) {
            execute(key, value);
        }
    }
}

function processConfig(config, startUp) {
    for (const key in config) {
        const value = config[key];
        if (value.type == 'folder') {
            processConfig(value.value, startUp);
        }
        if (value.link) {
            for (const link of value.link) {
                if (link == 'entry') {
                    createEntry(key, value);
                } else if (link == 'icon') {
                    document.querySelector('.desktop').appendChild(makeIcon(key, value));
                }
            }
        }
        if (startUp && value.start) {
            execute(key, value);
        }
    }
}

async function loadDesktop() {
    const path = location.hash ? decodeURI(location.hash.slice(1)).split('/') : null;
    processConfig(config, !path);
    if (path) {
        const traverse = { key: null, value: null, next: config };
        let error = false;
        for (const frag of path) {
            if (!frag) { continue; }
            if (!traverse.next) { error = true; break; }
            if (traverse.next[frag]) {
                traverse.key = frag;
                traverse.value = traverse.next[frag];
                traverse.next = traverse.value.type == 'folder' ? traverse.value.value : null;
            } else { error = true; break; }
        }
        if (!error) {
            traverse.value.hash = location.hash;
            execute(traverse.key, traverse.value);
        } else {
            location.href = '/error';
        }
    }
}

async function loadCounter(counterUrl) {
    const divCounter = document.createElement('div');
    divCounter.classList.add('counter');
    const response = await fetch(counterUrl);
    if (response.ok) {
        divCounter.textContent = await response.text();
    } else {
        divCounter.textContent = '*******';
    }
    document.querySelector('.status').appendChild(divCounter);
}

prepareDom();
loadDesktop();