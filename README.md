# 서울더원마취통증의학과의원 홈페이지

판교 서울더원마취통증의학과의원 공식 홈페이지 (정적 사이트).
프레임워크·빌드 과정 없이 **HTML/CSS/JS** 만으로 동작하므로 GitHub → Vercel로 바로 배포됩니다.

## 페이지 구성
| 파일 | 내용 |
|------|------|
| `index.html` | 메인(홈) |
| `about.html` | 소개 — 진료과목 → 의료진 소개 → 병원소개 (한 페이지) |
| `fees.html` | 소개 › 비급여항목 (수가표) |
| `treatment.html` | 치료안내 (원페이지 + 스크롤 스파이 6섹션) |
| `hours.html` | 진료시간 |
| `location.html` | 오시는 길 (주소 복사·버스 안내) |

공통 헤더/푸터/메뉴는 `js/site.js` 에서 자동으로 삽입됩니다. (모든 페이지 상단 퀵메뉴: 전화상담·오시는 길·네이버 예약·블로그)

## 배포 (GitHub → Vercel)
1. 이 `web` 폴더의 내용을 GitHub 저장소에 올립니다.
   - `web` 폴더째 올린 경우: Vercel 프로젝트 설정에서 **Root Directory** 를 `web` 으로 지정하세요.
   - `web` 내용을 저장소 루트에 올린 경우: Root Directory는 그대로 두면 됩니다.
2. Vercel에서 **New Project → GitHub 저장소 선택**.
3. Framework Preset: **Other (정적)**, Build Command 없음, Output Directory 비움 → **Deploy**.
4. 배포 후 **Settings → Domains** 에서 구매한 도메인을 연결하세요.

## 사진 교체 방법
모든 사진은 `images/` 폴더에 있습니다. **같은 파일명으로 덮어쓰면** 사이트에 바로 반영됩니다.

- 직접 업로드: GitHub 저장소의 `images/` 에서 파일을 교체(같은 이름으로 업로드).
- 병원소개 갤러리 사진/순서/문구: `js/data.js` 의 `FACILITIES` 배열만 수정하면 됩니다.
- Google Drive 사진을 쓰려면: 드라이브에서 파일을 "링크가 있는 모든 사용자" 로 공유 → 파일ID 확인 후
  `js/data.js` 의 `img` 값을 `https://drive.google.com/uc?export=view&id=파일ID` 형태로 넣으세요.

### 주요 이미지 파일명
- `logo.png` / `favicon.png` : 로고 · 파비콘(서울대 크레스트)
- `fac-entrance / fac-hall / fac-exam / fac-xray / fac-procedure / fac-sono / fac-rehab / fac-iv .jpg` : 시설 사진
- `doctor.jpg / doctor-stand.jpg / doctor-arms.jpg` : 대표원장
- `proc-inject.jpg / carm-monitor.jpg / carm-device.jpg / equipment.png` : 시술·장비

## 연락처/링크 수정
`js/site.js` 상단의 설정값에서 한 번에 바꿀 수 있습니다.
- 전화: `PHONE`, `PHONE_TEL`
- 네이버 예약: `BOOK_URL` = https://booking.naver.com/booking/13/bizes/1378738
- 블로그: `BLOG_URL` = https://blog.naver.com/seoulthe1
- 주소: `ADDR`

진료시간(도수·물리치료는 점심시간 없이 진료 문구 포함)은 `js/site.js` 의 `footerHTML()` 과 `hours.html` 에 있습니다.
