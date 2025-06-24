/*
 Navicat Premium Dump SQL

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80012 (8.0.12)
 Source Host           : localhost:3306
 Source Schema         : movies

 Target Server Type    : MySQL
 Target Server Version : 80012 (8.0.12)
 File Encoding         : 65001

 Date: 24/06/2025 09:29:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for videos
-- ----------------------------
DROP TABLE IF EXISTS `videos`;
CREATE TABLE `videos`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `hot` int(11) NULL DEFAULT NULL,
  `num` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 52 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of videos
-- ----------------------------
INSERT INTO `videos` VALUES (1, '哪吒之魔童闹海', '电影', 'https://img.bfzypic.com/upload/vod/20250124-1/6d568fb25c66e009e75594cc54de2596.jpg', 10, '1');
INSERT INTO `videos` VALUES (2, '绿皮书', '电影', 'https://snzypic.vip/upload/vod/20231204-1/b54bc7ad40a935efa587b14571622dc2.webp', 9, '1');
INSERT INTO `videos` VALUES (3, '触不可及', '电影', 'https://img.bfzypic.com/upload/vod/20230424-6/e0f0f45d0ed36208bde769e90d542ba0.jpg', 8, '1');
INSERT INTO `videos` VALUES (4, '楚门的世界', '电影', 'https://snzypic.vip/upload/vod/20231109-1/e86d09a99723b2726023cb66beb48d8b.webp', 7, '1');
INSERT INTO `videos` VALUES (5, '阿甘正传', '电影', 'https://snzypic.vip/upload/vod/20240715-1/2dcd8e57f205def0e3f77780fe81a865.jpg', 6, '1');
INSERT INTO `videos` VALUES (6, '我不是药神', '电影', 'https://snzypic.vip/upload/vod/20231118-1/0b2fc32417c5799c93ebea946c88ac93.webp', NULL, '1');
INSERT INTO `videos` VALUES (7, '海蒂和爷爷', '电影', 'https://img.bfzypic.com/upload/vod/20230424-13/ca04f9771b844eb236e1ad5043acc32c.jpg', NULL, '1');
INSERT INTO `videos` VALUES (8, '当幸福来敲门', '电影', 'https://snzypic.vip/upload/vod/20231203-1/1fe88fe9ad8f832452b0bd1e7f3df257.webp', NULL, '1');
INSERT INTO `videos` VALUES (9, '海上钢琴师', '电影', 'https://snzypic.vip/upload/vod/20240613-1/7c673820329b82b9eeb31add169211ef.jpg', NULL, '1');
INSERT INTO `videos` VALUES (10, '肖申克的救赎', '电影', 'https://snzypic.vip/upload/vod/20240714-1/4f20b7915509ba5d5f2fdea248624c40.jpg', NULL, '1');
INSERT INTO `videos` VALUES (11, '霸王别姬', '电影', 'https://snzypic.vip/upload/vod/20231115-1/cf39854e84397ae39926ded8881d92c2.webp', NULL, '1');
INSERT INTO `videos` VALUES (12, '三傻大闹宝莱坞', '电影', 'https://snzypic.vip/upload/vod/20231204-1/8f8cd7966d1193a1f53285c25df458fa.webp', NULL, '1');
INSERT INTO `videos` VALUES (13, '盗梦空间', '电影', 'https://snzypic.vip/upload/vod/20231114-1/d3cef99d71dcf08324b2f8e1e4279733.webp', NULL, '1');
INSERT INTO `videos` VALUES (14, '惊天魔盗团', '电影', 'https://snzypic.vip/upload/vod/20240324-1/da1b777988e2ca5b01c58537defb3dce.webp', NULL, '1');
INSERT INTO `videos` VALUES (15, '惊天魔盗团2', '电影', 'https://snzypic.vip/upload/vod/20231125-1/a3dcbaea264681b450d2631f6d758971.webp', NULL, '1');
INSERT INTO `videos` VALUES (16, '泰坦尼克号', '电影', 'https://snzypic.vip/upload/vod/20240718-1/71e4a31c134cf7a0fa83bc7eda82e87f.jpg', NULL, '1');
INSERT INTO `videos` VALUES (17, '心灵捕手', '电影', 'https://snzypic.vip/upload/vod/20231219-1/1e8b9ba04c4ee805633b7b044b4424a5.webp', NULL, '1');
INSERT INTO `videos` VALUES (18, '猫鼠游戏', '电影', 'https://img.lzzyimg.com/upload/vod/20221029-1/8af91e31554b0a5dd382f33a29a0f1d5.jpg', NULL, '1');
INSERT INTO `videos` VALUES (19, '怦然心动', '电影', 'https://snzypic.vip/upload/vod/20240723-1/65265338df462544560138ec0a1f707b.jpg', NULL, '1');
INSERT INTO `videos` VALUES (20, '少林足球', '电影', 'https://img.bfzypic.com/upload/vod/20230424-30/2f086c57bedc5604afee753f32556723.jpg', NULL, '1');
INSERT INTO `videos` VALUES (21, '复仇者联盟4', '电影', 'https://snzypic.vip/upload/vod/20240803-1/f160fb47fcde0eb1a6c46fce687128b7.jpg', NULL, '1');
INSERT INTO `videos` VALUES (22, '边水往事', '电视剧', 'https://img.bfzypic.com/upload/vod/20240816-1/7dfe8f63c3f4106322036054665f6041.jpg', NULL, '23');
INSERT INTO `videos` VALUES (23, '都挺好', '电视剧', 'https://img.lzzyimg.com/upload/vod/20230118-1/4afcd052e99c2eacda036efdc897ed0d.jpg', NULL, '32');
INSERT INTO `videos` VALUES (24, '狂飙', '电视剧', 'https://img.bfzypic.com/upload/vod/20230424-19/9c76961f164a1f7af4bfc5c9a6015dfb.jpg', 9, '55');
INSERT INTO `videos` VALUES (25, '三十而已', '电视剧', 'https://img.lzzyimg.com/upload/vod/20230713-1/f529896ba37d386739d5e2934af2ed13.jpg', NULL, '45');
INSERT INTO `videos` VALUES (26, '庆余年', '电视剧', 'https://img.bfzypic.com/upload/vod/20240507-1/5d2fda00777eb9519160645b805f9b58.jpg', NULL, '26');
INSERT INTO `videos` VALUES (27, '行尸走肉', '电视剧', 'https://img.bfzypic.com/upload/vod/20250504-1/f5ac954d9bae2877d979f8a349436c56.jpg', 8, '12');
INSERT INTO `videos` VALUES (28, '怪奇物语', '电视剧', 'https://snzypic.vip/upload/vod/20250416-1/93ce8941c5c2c7b8519dcbb6c019c073.jpg', NULL, '12');
INSERT INTO `videos` VALUES (29, '黑袍纠察队', '电视剧', 'https://img.bfzypic.com/upload/vod/20240613-1/af5b232c6fcf10ef886d4708126c3eac.jpg', 6, '16');
INSERT INTO `videos` VALUES (30, '无耻之徒', '电视剧', 'https://img.bfzypic.com/upload/vod/20250520-1/f87f273a6f68dc4228ac2c27c69bb682.jpg', 7, '15');
INSERT INTO `videos` VALUES (31, '汉尼拔', '电视剧', 'https://img.bfzypic.com/upload/vod/20230424-13/b25f0a4333c82539b81113f4ca0a9708.jpg', NULL, '14');
INSERT INTO `videos` VALUES (32, '越狱', '电视剧', 'https://img.bfzypic.com/upload/vod/20230424-45/8dd10d33a69ea03a68df4c016cf76ac4.jpg', NULL, '32');
INSERT INTO `videos` VALUES (34, '浴血黑帮', '电视剧', 'https://img.lzzyimg.com/upload/vod/20220720-1/921b9b4cc8f572d2aaa0de1bebd34ad6.jpg', NULL, '30');
INSERT INTO `videos` VALUES (35, '神探夏洛克', '电视剧', 'https://img.lzzyimg.com/upload/vod/20240726-1/5e5e349430ed0a4347086b07dbd476e6.jpg', NULL, '14');
INSERT INTO `videos` VALUES (36, '绝命毒师', '电视剧', 'https://img.lzzyimg.com/upload/vod/20240722-1/93fafe156b44c32c8d9ed403cea5eed4.jpg', 10, '20');
INSERT INTO `videos` VALUES (37, '凡人修仙传', '动漫', 'https://img.bfzypic.com/upload/vod/20230424-10/c86b7ef4657cc026bb3986c6f966767a.jpg', 10, '145');
INSERT INTO `videos` VALUES (38, '吞噬星空', '动漫', 'https://img.bfzypic.com/upload/vod/20230424-35/d1abbd450ea09a195a7b58409ff1bdd3.jpg', 9, '174');
INSERT INTO `videos` VALUES (39, '仙逆', '动漫', 'https://img.bfzypic.com/upload/vod/20250202-1/2da9a60472a29d256cddd9e58bd75c26.jpg', 8, '91');
INSERT INTO `videos` VALUES (40, '沧元图', '动漫', 'https://img.bfzypic.com/upload/vod/20230622-1/a129437526a54efaaa1555f461e8b8a6.jpg', 7, '57');
INSERT INTO `videos` VALUES (41, '牧神记', '动漫', 'https://img.bfzypic.com/upload/vod/20241027-1/90eba13d5523ff395b96971c9cb5ad3c.jpg', 6, '33');
INSERT INTO `videos` VALUES (42, '剑来', '动漫', 'https://img.lzzyimg.com/upload/vod/20240815-1/414a848b1cf25632f407c68b1464efa9.jpg', 5, '26');
INSERT INTO `videos` VALUES (43, '遮天', '动漫', 'https://img.bfzypic.com/upload/vod/20230503-1/e06da498a6ef87146da2b8b454d617c3.jpg', 4, '112');
INSERT INTO `videos` VALUES (44, '一念永恒', '动漫', 'https://img.lzzyimg.com/upload/vod/20221224-1/6bb90aa4905840fdd344d37504ef636e.jpg', 3, '52');
INSERT INTO `videos` VALUES (45, '灵笼', '动漫', 'https://img.bfzypic.com/upload/vod/20250524-1/6811569d2b316cbfe3eb577b2ec12d7e.jpg', 2, '19');
INSERT INTO `videos` VALUES (46, '一人之下', '动漫', 'https://img.bfzypic.com/upload/vod/20230424-44/d88a5c93662307cee9607b72969564a0.jpg', 1, '12');
INSERT INTO `videos` VALUES (47, '我独自升级', '动漫', 'https://img.bfzypic.com/upload/vod/20250105-1/60bfb8c6edea9f025bf00458aa791466.jpg', NULL, '12');
INSERT INTO `videos` VALUES (48, '夏日重现', '动漫', 'https://img.lzzyimg.com/upload/vod/20230505-1/89cd8b5ea5fe50bc7a979178e48f492c.jpg', NULL, '25');
INSERT INTO `videos` VALUES (49, '为美好的世界献上祝福', '动漫', 'https://img.bfzypic.com/upload/vod/20230424-36/51c35ec9f07d43c0ebc0e44928d67712.jpg', NULL, '10');
INSERT INTO `videos` VALUES (50, '咒术回战', '动漫', 'https://img.bfzypic.com/upload/vod/20230424-47/4f6630d73817ad1cce5a4ef32a22e5c2.jpg', NULL, '24');
INSERT INTO `videos` VALUES (51, '从零开始的异世界生活', '动漫', 'https://img.bfzypic.com/upload/vod/20230424-29/82e3aec3f43103fa1b7e5a0e7f7c3806.jpg', NULL, '25');

SET FOREIGN_KEY_CHECKS = 1;
