var rooms = [
  {value:30097,text:`Dark World`},
  {value:30108,text:`Cold Place`},
  {value:30134,text:`Green Room`},
  {value:30155,text:`Dark World?`},
  {value:30178,text:`Goulden Sam`},
  {value:30195,text:`TV World - Before the Show`},
  {value:30196,text:`TV World - Entrance`},
  {value:30209,text:`TV World - Concert`},
  {value:30214,text:`TV World - Cooking Show`}
];


var rooms_all = [
  {value: 30094, text: `room_dw_tv_cutscene1g`},
  {value: 30095, text: `room_dw_rhythm`},
  {value: 30097, text: `room_dw_couch_overworld_intro`},
  {value: 30098, text: `room_dw_couch_overworld_01`},
  {value: 30099, text: `room_dw_couch_overworld_02`},
  {value: 30100, text: `room_dw_couch_overworld_03`},
  {value: 30101, text: `room_dw_couch_overworld_04`},
  {value: 30102, text: `room_dw_couch_overworld_05`},
  {value: 30103, text: `room_dw_nondescript_room`},
  {value: 30104, text: `room_dw_nondescript_field`},
  {value: 30105, text: `room_dw_nondescript_hallway`},
  {value: 30106, text: `room_dw_nondescript_classroom`},
  {value: 30107, text: `room_dw_backstage`},
  {value: 30108, text: `room_dw_snow_zone`},
  {value: 30109, text: `room_town_krisyard_dark`},
  {value: 30111, text: `room_board_1`},
  {value: 30114, text: `room_board_dungeon_2`},
  {value: 30115, text: `room_board_dungeon_3`},
  {value: 30116, text: `room_board_preshadowmantle`},
  {value: 30117, text: `room_shadowmantle`},
  {value: 30118, text: `room_board_prepostshadowmantle`},
  {value: 30119, text: `room_board_postshadowmantle`},
  {value: 30120, text: `room_dw_ch3_man`},
  {value: 30123, text: `room_susiezilla`},
  {value: 30124, text: `room_board_intro`},
  {value: 30126, text: `room_torhouse_sepia`},
  {value: 30130, text: `room_ch3_gameshowroom`},
  {value: 30131, text: `room_shootout`},
  {value: 30133, text: `room_board_preshadowmantle_repeat`},
  {value: 30134, text: `room_dw_green_room`},
  {value: 30135, text: `room_board_1_sword`},
  {value: 30136, text: `room_board_sword_intro`},
  {value: 30137, text: `room_board_1_sword_trees`},
  {value: 30138, text: `room_dw_changing_room`},
  {value: 30139, text: `room_dw_console_room`},
  {value: 30140, text: `room_board_2`},
  {value: 30141, text: `room_dw_tv_closet`},
  {value: 30143, text: `room_board_3`},
  {value: 30146, text: `room_dw_b3bs_interstitial`},
  {value: 30147, text: `room_board_2_sword`},
  {value: 30149, text: `room_board_empty`},
  {value: 30150, text: `room_dw_b3bs_rouxls_lanina`},
  {value: 30152, text: `room_dw_b3bs_rouxls_boss`},
  {value: 30153, text: `room_dw_b3bs_cheaterpippins`},
  {value: 30154, text: `room_dw_b3bs_idcardpuzzle`},
  {value: 30155, text: `room_dw_b3bs_intro`},
  {value: 30156, text: `room_dw_b3bs_zapper_a`},
  {value: 30157, text: `room_dw_b3bs_rabbick_a`},
  {value: 30158, text: `room_dw_b3bs_lancerget`},
  {value: 30159, text: `room_dw_b3bs_cooltrashy`},
  {value: 30160, text: `room_dw_b3bs_zapper_c`},
  {value: 30161, text: `room_dw_b3bs_rabbick_b`},
  {value: 30162, text: `room_dw_b3bs_sadshadowguys`},
  {value: 30163, text: `room_dw_b3bs_zapper_b`},
  {value: 30165, text: `room_dw_susiezilla`},
  {value: 30166, text: `room_dw_inbetween`},
  {value: 30167, text: `room_dw_teevie_preview`},
  {value: 30168, text: `room_dw_chef`},
  {value: 30169, text: `room_dw_puzzlecloset_1`},
  {value: 30170, text: `room_dw_puzzlecloset_2`},
  {value: 30173, text: `room_dw_chef_empty`},
  {value: 30174, text: `room_dw_susiezilla_empty`},
  {value: 30175, text: `room_dw_rhythm_empty`},
  {value: 30176, text: `room_board_3b`},
  {value: 30178, text: `room_dw_b3bs_jail1`},
  {value: 30179, text: `room_dw_b3bs_shop`},
  {value: 30180, text: `room_dw_b3bs_mysterypuzzle`},
  {value: 30181, text: `room_dw_b3bs_watercooler`},
  {value: 30182, text: `room_dw_b3bs_jail2`},
  {value: 30183, text: `room_dw_b3bs_zapper_d`},
  {value: 30184, text: `room_dw_b3bs_extrapuzzle`},
  {value: 30185, text: `room_dw_b3bs_bibliox`},
  {value: 30187, text: `room_board_3_sword`},
  {value: 30188, text: `room_dw_couch_points`},
  {value: 30189, text: `room_dw_couch_overworld_intro_left`},
  {value: 30190, text: `room_dw_couch_video`},
  {value: 30191, text: `room_dw_snow_zone_battle`},
  {value: 30193, text: `room_dw_puzzlecloset_0`},
  {value: 30194, text: `room_board_gsa02_b0`},
  {value: 30195, text: `room_dw_tv_curtain`},
  {value: 30196, text: `room_dw_teevie_intro`},
  {value: 30197, text: `room_dw_teevie_large_01`},
  {value: 30198, text: `room_dw_teevie_large_02`},
  {value: 30199, text: `room_dw_teevie_cowboy_zone_01_intro`},
  {value: 30200, text: `room_dw_teevie_cowboy_zone_01_after`},
  {value: 30201, text: `room_dw_teevie_watercooler`},
  {value: 30202, text: `room_dw_teevie_susiezilla`},
  {value: 30203, text: `room_dw_teevie_cowboy_zone_02_intro`},
  {value: 30204, text: `room_dw_teevie_cowboy_zone_02_after`},
  {value: 30205, text: `room_dw_teevie_shadow_guys`},
  {value: 30206, text: `room_dw_teevie_stealth_c`},
  {value: 30207, text: `room_dw_teevie_stealth`},
  {value: 30208, text: `room_dw_teevie_failure_cage`},
  {value: 30209, text: `room_dw_teevie_rhythm`},
  {value: 30210, text: `room_dw_teevie_maze_points`},
  {value: 30211, text: `room_dw_teevie_maze_chef`},
  {value: 30212, text: `room_dw_teevie_maze_final`},
  {value: 30213, text: `room_dw_teevie_maze`},
  {value: 30214, text: `room_dw_teevie_chef`},
  {value: 30215, text: `room_dw_teevie_cutscene_final`},
  {value: 30216, text: `room_dw_teevie_ribbick`},
  {value: 30217, text: `room_dw_teevie_preview_south`},
  {value: 30218, text: `room_dw_b3bs_camerareminder`},
  {value: 30219, text: `room_dw_puzzlecloset_3`},
  {value: 30220, text: `room_dw_teevie_sams`},
  {value: 30221, text: `room_dw_teevie_bonus_zone`},
  {value: 30222, text: `room_dw_teevie_audiencepits`},
  {value: 30224, text: `room_dw_teevie_lightmaze`},
  {value: 30225, text: `room_dw_teevie_maze_quiz`},
  {value: 30226, text: `room_dw_ranking_hub`},
  {value: 30227, text: `room_dw_ranking_a`},
  {value: 30228, text: `room_dw_ranking_b`},
  {value: 30229, text: `room_dw_ranking_c`},
  {value: 30230, text: `room_dw_ranking_z`},
  {value: 30231, text: `room_dw_ranking_z_hallway`},
  {value: 30232, text: `room_dw_teevie_ribbicks_a`},
  {value: 30233, text: `room_dw_teevie_ribbicks_b`},
  {value: 30234, text: `room_dw_teevie_susiebridge`},
  {value: 30235, text: `room_dw_teevie_shuttahmaze`},
  {value: 30236, text: `room_dw_teevie_stealth_d`},
  {value: 30237, text: `room_dw_teevie_dust`},
  {value: 30238, text: `room_dw_teevie_dust_south`},
  {value: 30239, text: `room_ch3_gacharoom_unknown`},
  {value: 30240, text: `room_dw_ranking_t`},
  {value: 30241, text: `room_dw_puzzlecloset_1a`},
  {value: 30242, text: `room_dw_rhythm_countdown`},
  {value: 30243, text: `room_dw_snow_zone_east_door`},
  {value: 30244, text: `room_dw_inbetweenhall`},
  {value: 20001, text: `PLACE_DOGCHECK2`},
  {value: 20011, text: `ROOM_INITIALIZE`},
  {value: 20027, text: `PLACE_CONTACT`},
  {value: 20028, text: `room_krisroom`},
  {value: 20029, text: `room_krishallway`},
  {value: 20030, text: `room_torroom`},
  {value: 20031, text: `room_torhouse`},
  {value: 20032, text: `room_torbathroom`},
  {value: 20033, text: `room_town_krisyard`},
  {value: 20034, text: `room_town_northwest`},
  {value: 20035, text: `room_town_north`},
  {value: 20036, text: `room_beach`},
  {value: 20037, text: `room_town_mid`},
  {value: 20038, text: `room_town_apartments`},
  {value: 20039, text: `room_town_south`},
  {value: 20040, text: `room_town_school`},
  {value: 20041, text: `room_town_church`},
  {value: 20042, text: `room_graveyard`},
  {value: 20043, text: `room_town_shelter`},
  {value: 20044, text: `room_hospital_lobby`},
  {value: 20045, text: `room_hospital_hallway`},
  {value: 20046, text: `room_hospital_rudy`},
  {value: 20047, text: `room_hospital_room2`},
  {value: 20048, text: `room_diner`},
  {value: 20049, text: `room_townhall`},
  {value: 20050, text: `room_flowershop_1f`},
  {value: 20051, text: `room_flowershop_2f`},
  {value: 20052, text: `room_library`},
  {value: 20053, text: `room_alphysalley`},
  {value: 20054, text: `room_lw_computer_lab`},
  {value: 20055, text: `room_lw_library_upstairs`},
  {value: 20056, text: `room_lw_police`},
  {value: 20057, text: `room_lw_conbini`},
  {value: 20058, text: `room_lw_icee_pizza`},
  {value: 20059, text: `room_torielclass`},
  {value: 20060, text: `room_schoollobby`},
  {value: 20061, text: `room_alphysclass`},
  {value: 20062, text: `room_schooldoor`},
  {value: 20063, text: `room_insidecloset`},
  {value: 20064, text: `room_school_unusedroom`},
  {value: 20066, text: `room_castle_tutorial`},
  {value: 20068, text: `room_dw_castle_east_door`},
  {value: 20069, text: `room_dw_castle_west_cliff`},
  {value: 20070, text: `room_dw_castle_area_1`},
  {value: 20073, text: `room_dw_ralsei_castle_front`},
  {value: 20074, text: `room_dw_castle_restaurant`},
  {value: 20075, text: `room_dw_castle_cafe`},
  {value: 20076, text: `room_dw_castle_dojo`},
  {value: 20077, text: `room_dw_ralsei_castle_1f`},
  {value: 20078, text: `room_dw_ralsei_castle_2f`},
  {value: 20079, text: `room_dw_castle_dungeon`},
  {value: 20081, text: `room_dw_castle_rooms_kris`},
  {value: 20082, text: `room_dw_castle_rooms_susie`},
  {value: 20233, text: `PLACE_DOG`},
  {value: 20234, text: `room_legend`},
  {value: 20235, text: `room_legend_neo`},
  {value: 20236, text: `room_shop1`},
  {value: 20240, text: `room_gameover`},
  {value: 20241, text: `PLACE_LOGO`},
  {value: 20242, text: `PLACE_FAILURE`},
  {value: 20243, text: `PLACE_NAMING_JIKKEN`},
  {value: 20244, text: `PLACE_MENU`},
  {value: 20245, text: `room_ed`},
  {value: 20246, text: `room_empty`},
  {value: 20269, text: `room_cc_lancer`},
  {value: 20270, text: `room_cc_clover`},
  {value: 20271, text: `room_cc_fountain`}
];


var weapons = [
{value:0,text:`(Nothing)`},
{value:1,text:`Wood Blade`},
{value:2,text:`Mane Ax`},
{value:3,text:`Red Scarf`},
{value:4,text:`EverybodyWeapon`},
{value:5,text:`Spookysword`},
{value:6,text:`Brave Ax`},
{value:7,text:`Devilsknife`},
{value:8,text:`Trefoil`},
{value:9,text:`Ragger`},
{value:10,text:`DaintyScarf`},
{value:11,text:`TwistedSwd`},
{value:12,text:`SnowRing`},
{value:13,text:`ThornRing`},
{value:14,text:`BounceBlade`},
{value:15,text:`CheerScarf`},
{value:16,text:`MechaSaber`},
{value:17,text:`AutoAxe`},
{value:18,text:`FiberScarf`},
{value:19,text:`Ragger2`},
{value:20,text:`BrokenSwd`},
{value:21,text:`PuppetScarf`},
{value:22,text:`FreezeRing`},
{value:23,text:`Saber10`},
{value:24,text:`ToxicAxe`},
{value:25,text:`FlexScarf`},
{value:26,text:`BlackShard`}
];

var armor = [
{value:0, text:`Empty`},
{value:1, text:`Amber Card`},
{value:2, text:`Dice Brace`},
{value:3, text:`Pink Ribbon`},
{value:4, text:`White Ribbon`},
{value:5, text:`IronShackle`},
{value:6, text:`MouseToken`},
{value:7, text:`Jevilstail`},
{value:8, text:`Silver Card`},
{value:9, text:`TwinRibbon`},
{value:10, text:`GlowWrist`},
{value:11, text:`ChainMail`},
{value:12, text:`B.ShotBowtie`},
{value:13, text:`SpikeBand`},
{value:14, text:`Silver Watch`},
{value:15, text:`TensionBow`},
{value:16, text:`Mannequin`},
{value:17, text:`DarkGoldBand`},
{value:18, text:`SkyMantle`},
{value:19, text:`SpikeShackle`},
{value:20, text:`FrayedBowtie`},
{value:21, text:`Dealmaker`},
{value:22, text:`RoyalPin`},
{value:23, text:`ShadowMantle`},
{value:24, text:`LodeStone`},
{value:25, text:`GingerGuard`},
{value:26, text:`BlueRibbon`},
{value:27, text:`TennaTie`}
];


var items = [
{value:0, text:`Empty`},
{value:1, text:`Dark Candy`},
{value:2, text:`ReviveMint`},
{value:3, text:`Glowshard`},
{value:4, text:`Manual`},
{value:5, text:`BrokenCake`},
{value:6, text:`TopCake`},
{value:7, text:`SpinCake`},
{value:8, text:`Darkburger`},
{value:9, text:`LancerCookie`},
{value:10, text:`GigaSalad`},
{value:11, text:`Clubswich`},
{value:12, text:`HeartsDonut`},
{value:13, text:`ChocDiamond`},
{value:14, text:`FavSandwich`},
{value:15, text:`RouxlsRoux`},
{value:16, text:`CD Bagel`},
{value:17, text:`Mannequin`},
{value:18, text:`Kris Tea`},
{value:19, text:`Noelle Tea`},
{value:20, text:`Ralsei Tea`},
{value:21, text:`Susie Tea`},
{value:22, text:`DD-Burger`},
{value:23, text:`LightCandy`},
{value:24, text:`ButJuice`},
{value:25, text:`SpagettiCode`},
{value:26, text:`JavaCookie`},
{value:27, text:`TensionBit`},
{value:28, text:`TensionGem`},
{value:29, text:`TensionMax`},
{value:30, text:`ReviveDust`},
{value:31, text:`ReviveBrite`},
{value:32, text:`S.POISON`},
{value:33, text:`DogDollar`},
{value:34, text:`TVDinner`},
{value:35, text:`Pipis`},
{value:36, text:`FlatSoda`},
{value:37, text:`TVSlop`},
{value:38, text:`ExecBuffet`},
{value:39, text:`DeluxeDinner`}
];



var key_items = [
{value:0, text:`Empty`},
{value:1, text:`Cell Phone`},
{value:2, text:`Egg`},
{value:3, text:`BrokenCake`},
{value:4, text:`Broken Key A`},
{value:5, text:`Door Key`},
{value:6, text:`Broken Key B`},
{value:7, text:`Broken Key C`},
{value:8, text:`Lancer`},
{value:9, text:`Rouxls Kaard`},
{value:10, text:`EmptyDisk`},
{value:11, text:`LoadedDisk`},
{value:12, text:`KeyGen`},
{value:13, text:`ShadowCrystal`},
{value:14, text:`Starwalker`},
{value:15, text:`PureCrystal`},
{value:16, text:`OddController`},
{value:17, text:`BackstagePass`},
{value:18, text:`TripTicket`},
{value:19, text:`LancerCon`}
];


var spells = [
{value:0, text:`Empty`},
{value:1, text:`Rude Sword`},
{value:2, text:`Heal Prayer`},
{value:3, text:`Pacify`},
{value:4, text:`Rude Buster`},
{value:5, text:`Red Buster`},
{value:6, text:`Duel Heal`},
{value:7, text:`ACT`},
{value:8, text:`SleepMist`},
{value:9, text:`IceShock`},
{value:10, text:`SnowGrave`},
{value:11, text:`UltraHeal`}
];


var lightworld_items = [
{value:0, text:`Empty`},
{value:1, text:`Hot Chocolate`},
{value:2, text:`Pencil`},
{value:3, text:`Bandage`},
{value:4, text:`Bouquet`},
{value:5, text:`Ball of Junk`},
{value:6, text:`Halloween Pencil`},
{value:7, text:`Lucky Pencil`},
{value:8, text:`Egg`},
{value:9, text:`Cards`},
{value:10, text:`Box of Heart Candy`},
{value:11, text:`Glass`},
{value:12, text:`Eraser`},
{value:13, text:`Mech. Pencil`},
{value:14, text:`Wristwatch`}
]


var lightworld_armor = [
{value:0, text:`Empty`},
{value:3, text:`Bandage`},
{value:14, text:`Wristwatch`}
]


var lightworld_weapons = [
{value:0, text:`Empty`},
{value:2, text:`Pencil`},
{value:6, text:`Halloween Pencil`},
{value:7, text:`Lucky Pencil`},
{value:12, text:`Eraser`},
{value:15, text:`CactusNeedle`}
]

var phone_numbers = [
{value:0, text:`Empty`},
{value:201, text:`Call Home`},
{value:202, text:`Sans's Number`}
]

var party_members = [
{value:0, text:`Empty`},
{value:1, text:`Kris`},
{value:2, text:`Susie`},
{value:3, text:`Ralsei`},
{value:4, text:`Noelle`}
]



var recruits = [
{value:0, text:"Known Quantity 0"},
{value:1, text:"Known Quantity 1"},
{value:2, text:"Known Quantity 2"},
{value:3, text:"Known Quantity 3"},
{value:4, text:"Known Quantity 4"},
{value:5, text:"Rudinn"},
{value:6, text:"Hathy"},
{value:7, text:"Known Quantity 7"},
{value:8, text:"Known Quantity 8"},
{value:9, text:"Known Quantity 9"},
{value:10, text:"Known Quantity 10"},
{value:11, text:"Ponman"},
{value:12, text:"Known Quantity 12"},
{value:13, text:"Rabbick"},
{value:14, text:"Bloxer"},
{value:15, text:"Jigsawry"},
{value:16, text:"Known Quantity 16"},
{value:17, text:"Known Quantity 17"},
{value:18, text:"Known Quantity 18"},
{value:19, text:"Known Quantity 19"},
{value:20, text:"JEVIL"},
{value:21, text:"Known Quantity 21"},
{value:22, text:"Rudinn Ranger"},
{value:23, text:"Head Hathy"},
{value:24, text:"Known Quantity 24"},
{value:25, text:"Known Quantity 25"},
{value:26, text:"Known Quantity 26"},
{value:27, text:"Known Quantity 27"},
{value:28, text:"Known Quantity 28"},
{value:29, text:"Known Quantity 29"},
{value:30, text:"Ambyu-Lance"},
{value:31, text:"Poppup"},
{value:32, text:"Tasque"},
{value:33, text:"Werewire"},
{value:34, text:"Maus"},
{value:35, text:"Virovirokun"},
{value:36, text:"Swatchling"},
{value:37, text:"Known Quantity 37"},
{value:38, text:"Known Quantity 38"},
{value:39, text:"Known Quantity 39"},
{value:40, text:"Werewerewire"},
{value:41, text:"Known Quantity 41"},
{value:42, text:"Tasque Manager"},
{value:43, text:"Known Quantity 43"},
{value:44, text:"Mauswheel"},
{value:45, text:"Known Quantity 45"},
{value:46, text:"Known Quantity 46"},
{value:47, text:"Known Quantity 47"},
{value:48, text:"Known Quantity 48"},
{value:49, text:"Known Quantity 49"},
{value:50, text:"Known Quantity 50"},
{value:51, text:"Known Quantity 51"},
{value:52, text:"Known Quantity 52"},
{value:53, text:"Known Quantity 53"},
{value:54, text:"Shadowguy"},
{value:55, text:"Shuttah"},
{value:56, text:"Zapper"},
{value:57, text:"Ribbick"},
{value:58, text:"Watercooler"},
{value:59, text:"Pippins"},
{value:60, text:"Elnina"},
{value:61, text:"Lanino"},
{value:62, text:"Known Quantity 62"},
{value:63, text:"Known Quantity 63"},
{value:64, text:"Known Quantity 64"},
{value:65, text:"Known Quantity 65"},
{value:66, text:"Known Quantity 66"},
{value:67, text:"Known Quantity 67"},
{value:68, text:"Known Quantity 68"},
{value:69, text:"Known Quantity 69"},
{value:70, text:"Known Quantity 70"},
{value:71, text:"Known Quantity 71"},
{value:72, text:"Known Quantity 72"},
{value:73, text:"Known Quantity 73"},
{value:74, text:"Known Quantity 74"},
{value:75, text:"Known Quantity 75"},
{value:76, text:"Known Quantity 76"},
{value:77, text:"Known Quantity 77"},
{value:78, text:"Known Quantity 78"},
{value:79, text:"Known Quantity 79"}
]

var unused_recruits = [
  0,1,2,3,4,7,8,9,10,12,16,17,18,19,20,21,24,25,26,27,28,29,37,38,39,41,43,45,46,47,48,49,
  50,51,52,53,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79
];

var thrasher_head_parts  = [
  {value:0,text:`LASER`},
  {value:1,text:`SWORD`},
  {value:2,text:`FLAME`},
  {value:3,text:`DUCK`},
];

var thrasher_body_parts  = [
  {value:0,text:`PLAIN`},
  {value:1,text:`WHEEL`},
  {value:2,text:`TANK`},
  {value:3,text:`DUCK`},
];


var thrasher_feet_parts  = [
  {value:0,text:`SNEAK`},
  {value:1,text:`A.WHL`},
  {value:2,text:`TREAD`},
  {value:3,text:`DUCK`},
];

var goner_food = [
  {value:0,text:`SWEET`},
  {value:1,text:`SOFT`},
  {value:2,text:`SOUR`},
  {value:3,text:`SALTY`},
  {value:4,text:`PAIN`},
  {value:5,text:`COLD`}
]

var goner_blood = [

    {value:0,text:`A`},
    {value:1,text:`AB`},
    {value:2,text:`B`},
    {value:3,text:`C`},
    {value:4,text:`D`}
]

var goner_color = [

    {value:0,text:`RED`},
    {value:1,text:`BLUE`},
    {value:2,text:`GREEN`},
    {value:3,text:`CYAN`}
]

var goner_feel = [

    {value:0,text:`LOVE`},
    {value:1,text:`HOPE`},
    {value:2,text:`DISGUST`},
    {value:3,text:`FEAR`}
]

var goner_gift = [

    {value:1,text:`KINDNESS`},
    {value:0,text:`MIND`},
    {value:-1,text:`AMBITION`},
    {value:-2,text:`BRAVERY`},
    {value:-3,text:`VOICE`}
]
