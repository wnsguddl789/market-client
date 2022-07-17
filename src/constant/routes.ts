import { routeType } from 'types';

export const conditionRoutes: routeType[] = [
  { content: '로그인', href: '/auth/login', requiredLoggedIn: false },
  { content: '회원가입', href: '/auth/register', requiredLoggedIn: false },
  { content: '마이페이지', href: '/auth/mypage', requiredLoggedIn: true },
  { content: '채팅', href: '/chat/list', requiredLoggedIn: true },
];

export const commonRoutes: routeType[] = [{ content: '메인화면', href: '/', requiredLoggedIn: false }];
