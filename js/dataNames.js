
var roomsCh1 = [
  {value:10001+315,text:`?????? (Dark World Closet)`},
  {value:10001+320,text:`Eye Puzzle`},
  {value:10001+325,text:`Castle Town`},
  {value:10001+329,text:`Field - Great Door`},
  {value:10001+336,text:`Field - Maze of Death`},
  {value:10001+339,text:`Seam's Shop`},
  {value:10001+348,text:`Field - Great Board`},
  {value:10001+351,text:`Great Board 2`},
  {value:10001+353,text:`Forest - Entrance`},
  {value:10001+362,text:`Forest - Bake Sale`},
  {value:10001+370,text:`Forest - Before Maze`},
  {value:10001+376,text:`Forest - After Maze`},
  {value:10001+377,text:`Forest - Thrashing Room`},
  {value:10001+387,text:`Card Castle - Prison`},
  {value:10001+391,text:`Card Castle - ??? (Basement)`},
  {value:10001+394,text:`Card Castle - 1F`},
  {value:10001+403,text:`Card Castle - 5F`},
  {value:10001+406,text:`Card Castle - Throne`}
];

var rooms = [
  {value:10000+3,text:`Queen's Mansion - Rooftop`},
  {value:10000+71,text:`My Castle Town`},
  {value:10000+84,text:`Dark World`},
  {value:10000+87,text:`Cyber Field Entrance`},
  {value:10000+91,text:`Cyber Field - Arcade Machine`},
  {value:10000+98,text:`Cyber Field - Music Shop`},
  {value:10000+121,text:`Cyber City - Entrance`},
  {value:10000+124,text:`Cyber City - First Alleyway`},
  {value:10000+130,text:`Cyber City - Music Shop`},
  {value:10000+135,text:`Cyber City - Mouse Alley`},
  {value:10000+137,text:`Second Alleyway`},
  {value:10000+142,text:`Cyber City - Heights`},
  {value:10000+161,text:`Queen's Mansion - Mess Hall`},
  {value:10000+166,text:`Queen's Mansion - Entrance`},
  {value:10000+180,text:`Queen's Mansion - Basement`},
  {value:10000+196,text:`Queen's Mansion - 3F`},
  {value:10000+202,text:`Queen's Mansion - Acid Tunnel`},
  {value:10000+205,text:`Queen's Mansion - 4F`}
];

var rooms_all = [
  {value:10000+1,text:`room_intro_ch2`},
{value:10000+2,text:`room_dw_mansion_fountain`},
{value:10000+3,text:`room_dw_mansion_prefountain`},
{value:10000+4,text:`room_debug_choicer_light`},
{value:10000+5,text:`room_debug_smallface`},
{value:10000+6,text:`room_debug_battleBalloon`},
{value:10000+7,text:`room_debug_smallface_dark`},
{value:10000+8,text:`room_debug_choicer_dark`},
{value:10000+9,text:`room_gms_debug_failsafe`},
{value:10000+10,text:`ROOM_INITIALIZE`},
{value:10000+11,text:`room_title_placeholder`},
{value:10000+12,text:`room_battletest`},
{value:10000+13,text:`room_cutscene_tester`},
{value:10000+14,text:`room_sound_tester`},
{value:10000+15,text:`room_sprite_tester`},
{value:10000+16,text:`room_gif_tester`},
{value:10000+17,text:`room_bullettest`},
{value:10000+18,text:`room_teacup_demoauto`},
{value:10000+19,text:`room_teacup_demobullets`},
{value:10000+20,text:`room_shaun_puzzle`},
{value:10000+21,text:`room_GMS2_test`},
{value:10000+22,text:`room_cutscene_tester_b`},
{value:10000+23,text:`room_debug_color`},
{value:10000+24,text:`room_debug_battle`},
{value:10000+25,text:`room_debug_loc`},
{value:10000+26,text:`PLACE_CONTACT`},
{value:10000+27,text:`room_krisroom`},
{value:10000+28,text:`room_krishallway`},
{value:10000+29,text:`room_torroom`},
{value:10000+30,text:`room_torhouse`},
{value:10000+31,text:`room_torbathroom`},
{value:10000+32,text:`room_town_krisyard`},
{value:10000+33,text:`room_town_northwest`},
{value:10000+34,text:`room_town_north`},
{value:10000+35,text:`room_beach`},
{value:10000+36,text:`room_town_mid`},
{value:10000+37,text:`room_town_apartments`},
{value:10000+38,text:`room_town_south`},
{value:10000+39,text:`room_town_school`},
{value:10000+40,text:`room_town_church`},
{value:10000+41,text:`room_graveyard`},
{value:10000+42,text:`room_town_shelter`},
{value:10000+43,text:`room_hospital_lobby`},
{value:10000+44,text:`room_hospital_hallway`},
{value:10000+45,text:`room_hospital_rudy`},
{value:10000+46,text:`room_hospital_room2`},
{value:10000+47,text:`room_diner`},
{value:10000+48,text:`room_townhall`},
{value:10000+49,text:`room_flowershop_1f`},
{value:10000+50,text:`room_flowershop_2f`},
{value:10000+51,text:`room_library`},
{value:10000+52,text:`room_alphysalley`},
{value:10000+53,text:`room_lw_computer_lab`},
{value:10000+54,text:`room_lw_library_upstairs`},
{value:10000+55,text:`room_lw_police`},
{value:10000+56,text:`room_lw_conbini`},
{value:10000+57,text:`room_lw_icee_pizza`},
{value:10000+58,text:`room_torielclass`},
{value:10000+59,text:`room_schoollobby`},
{value:10000+60,text:`room_alphysclass`},
{value:10000+61,text:`room_schooldoor`},
{value:10000+62,text:`room_insidecloset`},
{value:10000+63,text:`room_school_unusedroom`},
{value:10000+64,text:`room_castle_town`},
{value:10000+65,text:`room_castle_tutorial`},
{value:10000+66,text:`room_dw_castle_west_cliff_old`},
{value:10000+67,text:`room_dw_castle_east_door`},
{value:10000+68,text:`room_dw_castle_west_cliff`},
{value:10000+69,text:`room_dw_castle_area_1`},
{value:10000+70,text:`room_dw_castle_area_2`},
{value:10000+71,text:`room_dw_castle_area_2_transformed`},
{value:10000+72,text:`room_dw_ralsei_castle_front`},
{value:10000+73,text:`room_dw_castle_restaurant`},
{value:10000+74,text:`room_dw_castle_cafe`},
{value:10000+75,text:`room_dw_castle_dojo`},
{value:10000+76,text:`room_dw_ralsei_castle_1f`},
{value:10000+77,text:`room_dw_ralsei_castle_2f`},
{value:10000+78,text:`room_dw_castle_dungeon`},
{value:10000+79,text:`room_dw_castle_rooms_hallway`},
{value:10000+80,text:`room_dw_castle_rooms_kris`},
{value:10000+81,text:`room_dw_castle_rooms_susie`},
{value:10000+82,text:`room_dw_castle_rooms_lancer`},
{value:10000+83,text:`room_dw_cyber_intro_1`},
{value:10000+84,text:`room_dw_cyber_intro_connector`},
{value:10000+85,text:`room_dw_cyber_intro_2`},
{value:10000+86,text:`room_dw_cyber_rhythm_slide`},
{value:10000+87,text:`room_dw_cyber_savepoint`},
{value:10000+88,text:`room_dw_cyber_battle_maze_1`},
{value:10000+89,text:`room_dw_cyber_music_bullet`},
{value:10000+90,text:`room_dw_cyber_tasque_battle`},
{value:10000+91,text:`room_dw_cyber_keyboard_puzzle_1`},
{value:10000+92,text:`room_dw_cyber_queen_boxing`},
{value:10000+93,text:`room_dw_cyber_musical_door`},
{value:10000+94,text:`room_dw_cyber_maze_virokun`},
{value:10000+95,text:`room_dw_cyber_keyboard_puzzle_2`},
{value:10000+96,text:`room_dw_cyber_battle_maze_2`},
{value:10000+97,text:`room_dw_cyber_music_final`},
{value:10000+98,text:`room_dw_cyber_musical_shop`},
{value:10000+99,text:`room_dw_cyber_teacup_final`},
{value:10000+100,text:`room_dw_cyber_rollercoaster`},
{value:10000+101,text:`room_dw_cyber_maze_fireworks`},
{value:10000+102,text:`room_dw_cyber_maze_tasque`},
{value:10000+103,text:`room_dw_cyber_maze_queenscreen`},
{value:10000+104,text:`room_dw_cyber_viro_ring`},
{value:10000+105,text:`room_dw_cyber_post_music_boss_slide`},
{value:10000+106,text:`room_dw_cyber_keyboard_puzzle_3`},
{value:10000+107,text:`room_dw_cyber_battle_maze_3`},
{value:10000+108,text:`room_dw_cyber_teacup_2`},
{value:10000+109,text:`room_dw_cyber_shaunsmusicalbullettunnel`},
{value:10000+110,text:`room_dw_cyber_maze_rhythm`},
{value:10000+111,text:`room_dw_cyber_escalator_slide`},
{value:10000+112,text:`room_dw_cyber_nuberts_treasure`},
{value:10000+113,text:`room_dw_cyber_music_fight`},
{value:10000+114,text:`room_dw_cyber_keyboardexample`},
{value:10000+115,text:`room_dw_city_prototype_01`},
{value:10000+116,text:`room_dw_city_prototype_02`},
{value:10000+117,text:`room_dw_city_spamton_shop_exterior`},
{value:10000+118,text:`room_dw_city_spamton_house`},
{value:10000+119,text:`room_dw_city_intro`},
{value:10000+120,text:`room_dw_city_split`},
{value:10000+121,text:`room_dw_city_entrance`},
{value:10000+122,text:`room_dw_city_traffic_1`},
{value:10000+123,text:`room_dw_city_roadblock`},
{value:10000+124,text:`room_dw_city_hacker`},
{value:10000+125,text:`room_dw_city_mice`},
{value:10000+126,text:`room_dw_city_big_1`},
{value:10000+127,text:`room_dw_city_traffic_2`},
{value:10000+128,text:`room_dw_city_big_2`},
{value:10000+129,text:`room_dw_city_queen_drunk`},
{value:10000+130,text:`room_dw_city_savepoint`},
{value:10000+131,text:`room_dw_city_big_3`},
{value:10000+132,text:`room_dw_city_traffic_3`},
{value:10000+133,text:`room_dw_city_mice2`},
{value:10000+134,text:`room_dw_city_cheesemaze`},
{value:10000+135,text:`room_dw_city_mice3`},
{value:10000+136,text:`room_dw_city_poppup`},
{value:10000+137,text:`room_dw_city_berdly`},
{value:10000+138,text:`room_dw_city_traffic_4`},
{value:10000+139,text:`room_dw_city_spamton_alley`},
{value:10000+140,text:`room_dw_city_monologue`},
{value:10000+141,text:`room_dw_city_baseball`},
{value:10000+142,text:`room_dw_city_postbaseball_1`},
{value:10000+143,text:`room_dw_city_postbaseball_2`},
{value:10000+144,text:`room_dw_city_postbaseball_3`},
{value:10000+145,text:`room_dw_city_mansion_front`},
{value:10000+146,text:`room_dw_city_susie_ralsei_fun_1`},
{value:10000+147,text:`room_dw_city_mirrorfriend`},
{value:10000+148,text:`room_dw_city_treasure`},
{value:10000+149,text:`room_dw_city_dog_traffic`},
{value:10000+150,text:`room_dw_city_man`},
{value:10000+151,text:`room_dw_city_moss`},
{value:10000+152,text:`room_dw_city_big_3_backup_2exits`},
{value:10000+153,text:`room_dw_city_traffic_3_2Entrances`},
{value:10000+154,text:`room_dw_city_cheese`},
{value:10000+155,text:`room_dw_city_carnival`},
{value:10000+156,text:`room_dw_city_noelle_fight_intro`},
{value:10000+157,text:`room_dw_city_spamton_shop_interior`},
{value:10000+158,text:`room_dw_city_monologue_old`},
{value:10000+159,text:`room_dw_mansion_krisroom`},
{value:10000+160,text:`room_dw_mansion_susieroom`},
{value:10000+161,text:`room_dw_mansion_lightner_hallway`},
{value:10000+162,text:`room_dw_mansion_darkbulb_1`},
{value:10000+163,text:`room_dw_mansion_darkbulb_2`},
{value:10000+164,text:`room_dw_mansion_darkbulb_3`},
{value:10000+165,text:`room_dw_mansion_dining_a`},
{value:10000+166,text:`room_dw_mansion_entrance`},
{value:10000+167,text:`room_dw_mansion_fire_paintings`},
{value:10000+168,text:`room_dw_mansion_single_pot`},
{value:10000+169,text:`room_dw_mansion_potBalance`},
{value:10000+170,text:`room_dw_mansion_tasquePaintings`},
{value:10000+171,text:`room_dw_mansion_traffic`},
{value:10000+172,text:`room_dw_mansion_east_1f_e`},
{value:10000+173,text:`room_dw_mansion_east_1f_secret`},
{value:10000+174,text:`room_dw_mansion_east_teacup`},
{value:10000+175,text:`room_dw_mansion_east_teacup_4`},
{value:10000+176,text:`room_dw_mansion_east_teacup_3`},
{value:10000+177,text:`room_dw_mansion_east_teacup_2`},
{value:10000+178,text:`room_dw_mansion_b_entrance`},
{value:10000+179,text:`room_dw_mansion_b_stairs`},
{value:10000+180,text:`room_dw_mansion_b_central`},
{value:10000+181,text:`room_dw_mansion_b_west_1f`},
{value:10000+182,text:`room_dw_mansion_b_west_1f_a`},
{value:10000+183,text:`room_dw_mansion_b_west_1f_b`},
{value:10000+184,text:`room_dw_mansion_b_west_2f`},
{value:10000+185,text:`room_dw_mansion_b_east`},
{value:10000+186,text:`room_dw_mansion_b_east_a`},
{value:10000+187,text:`room_dw_mansion_b_east_b`},
{value:10000+188,text:`room_dw_mansion_b_east_transformed`},
{value:10000+189,text:`room_dw_mansion_east_2f_a`},
{value:10000+190,text:`room_dw_mansion_east_2f_transformed_new`},
{value:10000+191,text:`room_dw_mansion_east_2f_shortcut`},
{value:10000+192,text:`room_dw_mansion_kitchen`},
{value:10000+193,text:`room_dw_mansion_east_2f_c`},
{value:10000+194,text:`room_dw_mansion_east_2f_c_a`},
{value:10000+195,text:`room_dw_mansion_east_2f_d`},
{value:10000+196,text:`room_dw_mansion_east_3f`},
{value:10000+197,text:`room_dw_mansion_east_3f_projection`},
{value:10000+198,text:`room_dw_mansion_east_3f_toilet`},
{value:10000+199,text:`room_dw_mansion_acid_tunnel`},
{value:10000+200,text:`room_dw_mansion_acid_tunnel_puzzle_entrance`},
{value:10000+201,text:`room_dw_mansion_acid_tunnel_loop_rouxls`},
{value:10000+202,text:`room_dw_mansion_acid_tunnel_exit`},
{value:10000+203,text:`room_dw_mansion_east_4f_b`},
{value:10000+204,text:`room_dw_mansion_east_4f_c`},
{value:10000+205,text:`room_dw_mansion_east_4f_d`},
{value:10000+206,text:`room_dw_mansion_top`},
{value:10000+207,text:`room_dw_mansion_top_post`},
{value:10000+208,text:`room_dw_mansion_ferris_wheel`},
{value:10000+209,text:`room_dw_mansion_ferris_wheel_post`},
{value:10000+210,text:`room_dw_mansion_noelle_room`},
{value:10000+211,text:`room_dw_mansion_bridges`},
{value:10000+212,text:`room_dw_mansion_bridges_funny`},
{value:10000+213,text:`room_dw_mansion_mouseLottery`},
{value:10000+214,text:`room_dw_mansion_hands`},
{value:10000+215,text:`room_dw_mansion_dining3`},
{value:10000+216,text:`room_dw_mansion_dininghall`},
{value:10000+217,text:`room_dw_mansion_dining_storage`},
{value:10000+218,text:`room_dw_mansion_east_1f_b`},
{value:10000+219,text:`room_dw_mansion_east_2f_c_b`},
{value:10000+220,text:`room_dw_mansion_traffic_original`},
{value:10000+221,text:`room_dw_mansion_east_1f_a`},
{value:10000+222,text:`room_dw_mansion_east_2f_teacup`},
{value:10000+223,text:`room_dw_mansion_east_4f_e`},
{value:10000+224,text:`room_dw_mansion_east_4f_a`},
{value:10000+225,text:`room_dw_mansion_east_2f_ufo_old`},
{value:10000+226,text:`room_dw_mansion_east_1f_d`},
{value:10000+227,text:`room_dw_mansion_east_1f_c`},
{value:10000+228,text:`room_dw_mansion_sparks`},
{value:10000+229,text:`room_dw_mansion_acid_tunnel_old`},
{value:10000+230,text:`room_dw_mansion_top_post_old`},
{value:10000+231,text:`room_dw_mansion_elevator`},
{value:10000+232,text:`PLACE_DOG`},
{value:10000+233,text:`room_legend`},
{value:10000+234,text:`room_legend_neo`},
{value:10000+235,text:`room_shop1`},
{value:10000+236,text:`room_shop_ch2_music`},
{value:10000+237,text:`room_shop_ch2_swatch`},
{value:10000+238,text:`room_shop_ch2_spamton`},
{value:10000+239,text:`room_gameover`},
{value:10000+240,text:`PLACE_LOGO`},
{value:10000+241,text:`PLACE_FAILURE`},
{value:10000+242,text:`PLACE_NAMING_JIKKEN`},
{value:10000+243,text:`PLACE_MENU`},
{value:10000+244,text:`room_ed`},
{value:10000+245,text:`room_empty`},
{value:10000+246,text:`room_DARKempty`},
{value:10000+247,text:`room_DARKbase_GMS2`},
{value:10000+248,text:`room_dw_cyber_battle_maze_2_old`},
{value:10000+249,text:`room_dw_cyber_keyboard_puzzle_1_old`},
{value:10000+250,text:`room_dw_cyber_tasque_battle_og`},
{value:10000+251,text:`room_dw_cyber_savepoint_original`},
{value:10000+252,text:`room_dw_cyber_battle_maze_1_Original`},
{value:10000+253,text:`room_dw_cyber_music_bullet_original`},
{value:10000+254,text:`room_dw_cyber_maze_virokun_backuo`},
{value:10000+255,text:`room_dw_cyber_battle_maze_2_toby`},
{value:10000+256,text:`room_dw_city_big_1_original`},
{value:10000+257,text:`room_dw_city_traffic_2_old`},
{value:10000+258,text:`room_dw_city_big_2_OG`},
{value:10000+259,text:`room_dw_city_mice2_og`},
{value:10000+260,text:`room_dw_mansion_east_teacup_4_old`},
{value:10000+261,text:`room_dw_cyber_teacup_1`},
{value:10000+262,text:`room_dw_cyber_viromaze2`},
{value:10000+263,text:`room_dw_city_traffic_5_old`},
{value:10000+264,text:`room_dw_mansion_dining_storage_old`},
{value:10000+265,text:`room_dw_cyber_virovirokun_fight`},
{value:10000+266,text:`room_dw_mansion_east_2f_d_backup`},
{value:10000+267,text:`room_dw_city_traffic_3_backup`},
{value:10000+268,text:`room_cc_lancer`},
{value:10000+269,text:`room_cc_clover`},
{value:10000+270,text:`room_cc_fountain`},
{value:10000+271,text:`room_dw_city_big_3_og`},
{value:10000+272,text:`room_dw_mansion_bridgesold`},
{value:10000+273,text:`room_dw_city_sidewayscars`},
{value:10000+274,text:`room_transformation_sequence`},
{value:10000+275,text:`room_dw_mansion_gigaqueen`},
{value:10000+276,text:`room_musical_sync_test`},
{value:10000+277,text:`room_chapter_continue_ch1`},
{value:10000+278,text:`PLACE_CHAPTER_SELECT_2x`},
{value:10000+279,text:`PLACE_CHAPTER_SELECT`},
{value:10000+280,text:`ROOM_INITIALIZE_ch1`},
{value:10000+281,text:`PLACE_CONTACT_ch1`},
{value:10000+282,text:`room_krisroom_ch1`},
{value:10000+283,text:`room_krishallway_ch1`},
{value:10000+284,text:`room_torroom_ch1`},
{value:10000+285,text:`room_torhouse_ch1`},
{value:10000+286,text:`room_torbathroom_ch1`},
{value:10000+287,text:`room_town_krisyard_ch1`},
{value:10000+288,text:`room_town_northwest_ch1`},
{value:10000+289,text:`room_town_north_ch1`},
{value:10000+290,text:`room_beach_ch1`},
{value:10000+291,text:`room_town_mid_ch1`},
{value:10000+292,text:`room_town_apartments_ch1`},
{value:10000+293,text:`room_town_south_ch1`},
{value:10000+294,text:`room_town_school_ch1`},
{value:10000+295,text:`room_town_church_ch1`},
{value:10000+296,text:`room_graveyard_ch1`},
{value:10000+297,text:`room_town_shelter_ch1`},
{value:10000+298,text:`room_hospital_lobby_ch1`},
{value:10000+299,text:`room_hospital_hallway_ch1`},
{value:10000+300,text:`room_hospital_rudy_ch1`},
{value:10000+301,text:`room_hospital_room2_ch1`},
{value:10000+302,text:`room_diner_ch1`},
{value:10000+303,text:`room_townhall_ch1`},
{value:10000+304,text:`room_flowershop_1f_ch1`},
{value:10000+305,text:`room_flowershop_2f_ch1`},
{value:10000+306,text:`room_library_ch1`},
{value:10000+307,text:`room_alphysalley_ch1`},
{value:10000+308,text:`room_torielclass_ch1`},
{value:10000+309,text:`room_schoollobby_ch1`},
{value:10000+310,text:`room_alphysclass_ch1`},
{value:10000+311,text:`room_schooldoor_ch1`},
{value:10000+312,text:`room_insidecloset_ch1`},
{value:10000+313,text:`room_school_unusedroom_ch1`},
{value:10000+314,text:`room_dark1_ch1`},
{value:10000+315,text:`room_dark1a_ch1`},
{value:10000+316,text:`room_dark2_ch1`},
{value:10000+317,text:`room_dark3_ch1`},
{value:10000+318,text:`room_dark3a_ch1`},
{value:10000+319,text:`room_dark_wobbles_ch1`},
{value:10000+320,text:`room_dark_eyepuzzle_ch1`},
{value:10000+321,text:`room_dark7_ch1`},
{value:10000+322,text:`room_dark_chase1_ch1`},
{value:10000+323,text:`room_dark_chase2_ch1`},
{value:10000+324,text:`room_castle_outskirts_ch1`},
{value:10000+325,text:`room_castle_town_ch1`},
{value:10000+326,text:`room_castle_front_ch1`},
{value:10000+327,text:`room_castle_tutorial_ch1`},
{value:10000+328,text:`room_castle_darkdoor_ch1`},
{value:10000+329,text:`room_field_start_ch1`},
{value:10000+330,text:`room_field_forest_ch1`},
{value:10000+331,text:`room_field1_ch1`},
{value:10000+332,text:`room_field2_ch1`},
{value:10000+333,text:`room_field2A_ch1`},
{value:10000+334,text:`room_field_topchef_ch1`},
{value:10000+335,text:`room_field_puzzle1_ch1`},
{value:10000+336,text:`room_field_maze_ch1`},
{value:10000+337,text:`room_field_puzzle2_ch1`},
{value:10000+338,text:`room_field_getsusie_ch1`},
{value:10000+339,text:`room_field_shop1_ch1`},
{value:10000+340,text:`room_field_puzzletutorial_ch1`},
{value:10000+341,text:`room_field3_ch1`},
{value:10000+342,text:`room_field_boxpuzzle_ch1`},
{value:10000+343,text:`room_field4_ch1`},
{value:10000+344,text:`room_field_secret1_ch1`},
{value:10000+345,text:`room_field_checkers4_ch1`},
{value:10000+346,text:`room_field_checkers2_ch1`},
{value:10000+347,text:`room_field_checkers6_ch1`},
{value:10000+348,text:`room_field_checkers3_ch1`},
{value:10000+349,text:`room_field_checkers1_ch1`},
{value:10000+350,text:`room_field_checkers5_ch1`},
{value:10000+351,text:`room_field_checkers7_ch1`},
{value:10000+352,text:`room_field_checkersboss_ch1`},
{value:10000+353,text:`room_forest_savepoint1_ch1`},
{value:10000+354,text:`room_forest_area0_ch1`},
{value:10000+355,text:`room_forest_area1_ch1`},
{value:10000+356,text:`room_forest_area2_ch1`},
{value:10000+357,text:`room_forest_area2A_ch1`},
{value:10000+358,text:`room_forest_puzzle1_ch1`},
{value:10000+359,text:`room_forest_beforeclover_ch1`},
{value:10000+360,text:`room_forest_area3A_ch1`},
{value:10000+361,text:`room_forest_area3_ch1`},
{value:10000+362,text:`room_forest_savepoint2_ch1`},
{value:10000+363,text:`room_forest_smith_ch1`},
{value:10000+364,text:`room_forest_area4_ch1`},
{value:10000+365,text:`room_forest_dancers1_ch1`},
{value:10000+366,text:`room_forest_secret1_ch1`},
{value:10000+367,text:`room_forest_thrashmaker_ch1`},
{value:10000+368,text:`room_forest_starwalker_ch1`},
{value:10000+369,text:`room_forest_area5_ch1`},
{value:10000+370,text:`room_forest_savepoint_relax_ch1`},
{value:10000+371,text:`room_forest_maze1_ch1`},
{value:10000+372,text:`room_forest_maze_deadend_ch1`},
{value:10000+373,text:`room_forest_maze_susie_ch1`},
{value:10000+374,text:`room_forest_maze2_ch1`},
{value:10000+375,text:`room_forest_maze_deadend2_ch1`},
{value:10000+376,text:`room_forest_savepoint3_ch1`},
{value:10000+377,text:`room_forest_fightsusie_ch1`},
{value:10000+378,text:`room_forest_afterthrash2_ch1`},
{value:10000+379,text:`room_forest_afterthrash3_ch1`},
{value:10000+380,text:`room_forest_afterthrash4_ch1`},
{value:10000+381,text:`room_forest_castleview_ch1`},
{value:10000+382,text:`room_forest_chase1_ch1`},
{value:10000+383,text:`room_forest_chase2_ch1`},
{value:10000+384,text:`room_forest_castlefront_ch1`},
{value:10000+385,text:`room_cc_prison_cells_ch1`},
{value:10000+386,text:`room_cc_prisonlancer_ch1`},
{value:10000+387,text:`room_cc_prison_to_elevator_ch1`},
{value:10000+388,text:`room_cc_prison2_ch1`},
{value:10000+389,text:`room_cc_prisonelevator_ch1`},
{value:10000+390,text:`room_cc_elevator_ch1`},
{value:10000+391,text:`room_cc_prison_prejoker_ch1`},
{value:10000+392,text:`room_cc_joker_ch1`},
{value:10000+393,text:`room_cc_entrance_ch1`},
{value:10000+394,text:`room_cc_1f_ch1`},
{value:10000+395,text:`room_cc_rudinn_ch1`},
{value:10000+396,text:`room_cc_2f_ch1`},
{value:10000+397,text:`room_cc_rurus1_ch1`},
{value:10000+398,text:`room_cc_3f_ch1`},
{value:10000+399,text:`room_cc_hathy_ch1`},
{value:10000+400,text:`room_cc_4f_ch1`},
{value:10000+401,text:`room_cc_rurus2_ch1`},
{value:10000+402,text:`room_cc_clover_ch1`},
{value:10000+403,text:`room_cc_5f_ch1`},
{value:10000+404,text:`room_cc_lancer_ch1`},
{value:10000+405,text:`room_cc_6f_ch1`},
{value:10000+406,text:`room_cc_throneroom_ch1`},
{value:10000+407,text:`room_cc_preroof_ch1`},
{value:10000+408,text:`room_cc_kingbattle_ch1`},
{value:10000+409,text:`room_cc_prefountain_ch1`},
{value:10000+410,text:`room_cc_fountain_ch1`},
{value:10000+411,text:`PLACE_DOG_ch1`},
{value:10000+412,text:`room_legend_ch1`},
{value:10000+413,text:`room_shop1_ch1`},
{value:10000+414,text:`room_shop2_ch1`},
{value:10000+415,text:`room_gameover_ch1`},
{value:10000+416,text:`room_myroom_dark_ch1`},
{value:10000+417,text:`PLACE_LOGO_ch1`},
{value:10000+418,text:`PLACE_FAILURE_ch1`},
{value:10000+419,text:`PLACE_MENU_ch1`},
{value:10000+420,text:`room_ed_ch1`},
{value:10000+421,text:`room_empty_ch1`},
{value:10000+422,text:`room_man_ch1`},
{value:10000+423,text:`room_DARKempty_ch1`},
{value:10000+424,text:`room_battletest_ch1`},
{value:10000+425,text:`room_splashscreen_ch1`}

];


var weaponsCh1 = [
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
{value:10,text:`DaintyScarf`}
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
{value:50,text:`JingleBlade`},
{value:51,text:`ScarfMark`},
{value:52,text:`JusticeAxe`},
{value:53,text:`Winglade`},
{value:54,text:`AbsorbAx`}
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
{value:50, text:`Waterguard`},
{value:51, text:`MysticBand`},
{value:52, text:`PowerBand`},
{value:53, text:`PrincessRBN`},
{value:54, text:`GoldWidow`}
];

var armorCh1 = [
{value:0, text:`Empty`},
{value:1, text:`Amber Card`},
{value:2, text:`Dice Brace`},
{value:3, text:`Pink Ribbon`},
{value:4, text:`White Ribbon`},
{value:5, text:`IronShackle`},
{value:6, text:`MouseToken`},
{value:7, text:`Jevilstail`}
];


var itemsCh1 = [
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
{value:15, text:`RouxlsRoux`}
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
{value:33, text:`DogDollar`}
];


var key_itemsCh1 = [
{value:0, text:`Empty`},
{value:1, text:`Cell Phone`},
{value:2, text:`Egg`},
{value:3, text:`BrokenCake`},
{value:4, text:`Broken Key A`},
{value:5, text:`Door Key`},
{value:6, text:`Broken Key B`},
{value:7, text:`Broken Key C`}
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
{value:15, text:`PureCrystal`}
];

var spellsCh1 = [
{value:0, text:`Empty`},
{value:1, text:`Rude Sword`},
{value:2, text:`Heal Prayer`},
{value:3, text:`Pacify`},
{value:4, text:`Rude Buster`},
{value:5, text:`Red Buster`},
{value:6, text:`Duel Heal`},
{value:7, text:`ACT`}
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
{value:11, text:`UltimatHeal`}
];

var lightworld_itemsCh1 = [
{value:0, text:`Empty`},
{value:1, text:`Hot Chocolate`},
{value:2, text:`Pencil`},
{value:3, text:`Bandage`},
{value:4, text:`Bouquet`},
{value:5, text:`Ball of Junk`},
{value:6, text:`Halloween Pencil`},
{value:7, text:`Lucky Pencil`},
{value:8, text:`Egg`},
{value:11, text:`Glass`},
]

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

var lightworld_armorCh1 = [
{value:0, text:`Empty`},
{value:3, text:`Bandage`},
]

var lightworld_armor = [
{value:0, text:`Empty`},
{value:3, text:`Bandage`},
{value:14, text:`Wristwatch`}
]

var lightworld_weaponsCh1 = [
{value:0, text:`Empty`},
{value:2, text:`Pencil`},
{value:6, text:`Halloween Pencil`},
{value:7, text:`Lucky Pencil`}
]

var lightworld_weapons = [
{value:0, text:`Empty`},
{value:2, text:`Pencil`},
{value:6, text:`Halloween Pencil`},
{value:7, text:`Lucky Pencil`},
{value:12, text:`Eraser`}
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
{value:49, text:"Known Quantity 49"}
]

var unused_recruits = [
  0,1,2,3,4,7,8,9,10,12,16,17,18,19,20,21,24,25,26,27,28,29,37,38,39,41,43,45,46,47,48,49
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
