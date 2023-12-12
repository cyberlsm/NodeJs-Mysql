-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        11.2.2-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- 테이블 mysql.member 구조 내보내기
CREATE TABLE IF NOT EXISTS `member` (
  `idx` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '고유코드',
  `userID` varchar(50) NOT NULL COMMENT '아이디',
  `userName` varchar(50) NOT NULL COMMENT '이름',
  `Phone` varchar(50) NOT NULL COMMENT '휴대폰',
  `regDate` datetime NOT NULL DEFAULT current_timestamp() COMMENT '등록일',
  PRIMARY KEY (`idx`),
  UNIQUE KEY `userID` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- 테이블 데이터 mysql.member:~2 rows (대략적) 내보내기
INSERT INTO `member` (`idx`, `userID`, `userName`, `Phone`, `regDate`) VALUES
	(1, 'test123', '테스터123', '010123', '2023-12-01 10:42:04'),
	(2, 'test456', '테스터456', '010456', '2023-12-07 11:30:49');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
