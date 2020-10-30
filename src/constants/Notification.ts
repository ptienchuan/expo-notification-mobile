import { Notification } from '../types/Notification';

const NOTIFICATION_DUMMY: Notification[] = [
  {
    id: 1,
    title: 'Tiền hoa hồng!',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, ipsam.',
    seen: false,
    sendAt: '15:08 - 02/09/2020',
  },
  {
    id: 2,
    title: 'Điểm thưởng',
    description: 'Lorem ipsum dolor, sit amet.',
    seen: false,
    sendAt: '11:12 - 02/09/2020',
  },
  {
    id: 3,
    title: 'Nạp điện thoại thành công!',
    description: 'Consectetur adipisicing elit. Eum, ipsam.',
    seen: true,
    sendAt: '17:00 - 01/09/2020',
  },
  {
    id: 4,
    title: 'Nạp tiền thành công!',
    description:
      'Saepe accusantium provident ratione dolor tenetur ipsam unde illo dolorem libero fuga?Saepe accusantium provident ratione dolor tenetur ipsam unde illo dolorem libero fuga?',
    seen: true,
    sendAt: '8:08 - 01/09/2020',
  },
  {
    id: 5,
    title: 'Thẻ quà 20K - Giải trí thả ga',
    description: 'Ratione dolor tenetur ipsam unde illo dolorem libero fuga?',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus quibusdam dolore corporis facilis veritatis vero eos perspiciatis quidem nulla eveniet pariatur voluptatem, iure neque cum sint commodi accusamus ea! Autem, unde quod. Vel expedita at quis neque sapiente distinctio adipisci.',
    seen: true,
    sendAt: '11:55 - 28/08/2020',
  },
  //DUPLICATE ABOVE
  {
    id: 6,
    title: 'Tiền hoa hồng!',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, ipsam.',
    seen: false,
    sendAt: '15:08 - 02/09/2020',
  },
  {
    id: 7,
    title: 'Điểm thưởng',
    description: 'Lorem ipsum dolor, sit amet.',
    seen: false,
    sendAt: '11:12 - 02/09/2020',
  },
  {
    id: 8,
    title: 'Nạp điện thoại thành công!',
    description: 'Consectetur adipisicing elit. Eum, ipsam.',
    seen: true,
    sendAt: '17:00 - 01/09/2020',
  },
  {
    id: 9,
    title: 'Nạp tiền thành công!',
    description:
      'Saepe accusantium provident ratione dolor tenetur ipsam unde illo dolorem libero fuga?Saepe accusantium provident ratione dolor tenetur ipsam unde illo dolorem libero fuga?',
    seen: true,
    sendAt: '8:08 - 01/09/2020',
  },
  {
    id: 10,
    title: 'Thẻ quà 20K - Giải trí thả ga',
    description: 'Ratione dolor tenetur ipsam unde illo dolorem libero fuga?',
    seen: true,
    sendAt: '11:55 - 28/08/2020',
  },
];

export { NOTIFICATION_DUMMY };
