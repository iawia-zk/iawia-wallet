import { ZKType } from 'enums/ZKType';
import { TCompanyZKItem } from './History.types';

export const MOCK_HISTORY_ITEMS: TCompanyZKItem[] = [
  {
    company: {
      id: '0',
      name: 'Martı',
      logoUrl:
        'https://play-lh.googleusercontent.com/mP5kleTkVMNNFU-OnAHf4nDmcuQ5Js37tWJ4Yh9f0l_3gyWawIuLYQvKsDq8veCTcL8K',
      link: 'https://www.marti.tech',
    },
    zkList: [
      {
        zkType: ZKType.AGE_IS_OVER_18,
        verified: true,
        createdAt: '2024-03-16T09:00:00Z',
      },
      {
        zkType: ZKType.NATIONALITY_ID_IS_VALID,
        verified: true,
        createdAt: '2024-03-16T09:00:00Z',
      },
      {
        zkType: ZKType.GENDER_IS_MAN,
        verified: true,
        createdAt: '2024-03-16T09:00:00Z',
      },
    ],
  },
  {
    company: {
      id: '1',
      name: 'Turkish Airlines',
      logoUrl: 'https://seeklogo.com/images/T/turkish-airlines-logo-1E368810A4-seeklogo.com.png',
      link: 'https://www.turkishairlines.com',
    },
    zkList: [
      {
        zkType: ZKType.AGE_IS_OVER_18,
        verified: true,
        createdAt: '2024-03-15T10:30:00Z',
      },
      {
        zkType: ZKType.NATIONALITY_IS_TUR,
        verified: true,
        createdAt: '2024-03-15T10:30:00Z',
      },
    ],
  },
  {
    company: {
      id: '2',
      name: 'Garanti BBVA',
      logoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_GwGUaEvCjxNk4MRJRLs9_tw32R8eRFcyg&s',
      link: 'https://www.garantibbva.com.tr',
    },
    zkList: [
      {
        zkType: ZKType.AGE_IS_OVER_24,
        verified: true,
        createdAt: '2024-03-14T15:45:00Z',
      },
      {
        zkType: ZKType.NATIONALITY_ID_IS_VALID,
        verified: true,
        createdAt: '2024-03-14T15:45:00Z',
      },
    ],
  },
  {
    company: {
      id: '3',
      name: 'Pegasus Airlines',
      logoUrl: 'https://logos-world.net/wp-content/uploads/2023/06/Pegasus-Airlines-Logo.png',
      link: 'https://www.flypgs.com',
    },
    zkList: [
      {
        zkType: ZKType.PASSPORT_ID_IS_VALID,
        verified: false,
        createdAt: '2024-03-13T09:20:00Z',
      },
      {
        zkType: ZKType.AGE_IS_OVER_18,
        verified: true,
        createdAt: '2024-03-13T09:20:00Z',
      },
    ],
  },
  {
    company: {
      id: '4',
      name: 'Akbank',
      logoUrl:
        'https://play-lh.googleusercontent.com/9DNyOdfKCtVfl1l7sncqcvAbgHMVcSaQ_uzz4tNYrKxye5n0RCqTlvsu1lagJPxenyo',
      link: 'https://www.akbank.com',
    },
    zkList: [
      {
        zkType: ZKType.AGE_IS_OVER_24,
        verified: true,
        createdAt: '2024-03-12T14:15:00Z',
      },
      {
        zkType: ZKType.NATIONALITY_IS_TUR,
        verified: true,
        createdAt: '2024-03-12T14:15:00Z',
      },
      {
        zkType: ZKType.NATIONALITY_ID_IS_VALID,
        verified: true,
        createdAt: '2024-03-12T14:15:00Z',
      },
    ],
  },
  {
    company: {
      id: '5',
      name: 'Yapi Kredi',
      logoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvXDc2kdZVnCpGXjniYjyUnsfonLOdZEfNw&s',
      link: 'https://www.yapikredi.com.tr',
    },
    zkList: [
      {
        zkType: ZKType.GENDER_IS_MAN,
        verified: true,
        createdAt: '2024-03-11T11:30:00Z',
      },
      {
        zkType: ZKType.AGE_IS_OVER_18,
        verified: true,
        createdAt: '2024-03-11T11:30:00Z',
      },
      {
        zkType: ZKType.NATIONALITY_ID_IS_VALID,
        verified: false,
        createdAt: '2024-03-11T11:30:00Z',
      },
    ],
  },
];
