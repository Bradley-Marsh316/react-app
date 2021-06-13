import React, { createContext, useReducer } from 'react';
import Reducer from './reducer';

const initialState = {
  messages: [
    {
      id: 1,
      userName: 'Brad Marsh',
      tagline: 'last online 2 minutes',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl est, scelerisque eget ante id, congue condimentum urna. Vivamus hendrerit elit erat, id rutrum nulla pretium at. Nam auctor lorem eget metus consectetur, sit amet commodo ligula rutrum. Vestibulum pellentesque sed turpis ut ultrices. Donec egestas, velit nec aliquet ultrices, sem erat tempor mauris, eu placerat nunc neque ac odio. Nunc nulla enim, consectetur tempor libero et, tempor commodo nisi. Quisque sed magna non lectus aliquam efficitur ac et massa.',
      messages: [
        {
          type: 'sent',
          content: 'Lorem ipsum'
        },
        {
          type: 'sent',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds. Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem sdkfjlhseui fhuehakflhds '
        }
      ]
    },
    {
      id: 2,
      userName: 'Brad Marsh',
      tagline: 'last online 2 minutes',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl est, scelerisque eget ante id, congue condimentum urna. Vivamus hendrerit elit erat, id rutrum nulla pretium at. Nam auctor lorem eget metus consectetur, sit amet commodo ligula rutrum. Vestibulum pellentesque sed turpis ut ultrices. Donec egestas, velit nec aliquet ultrices, sem erat tempor mauris, eu placerat nunc neque ac odio. Nunc nulla enim, consectetur tempor libero et, tempor commodo nisi. Quisque sed magna non lectus aliquam efficitur ac et massa.',
      messages: [
        {
          type: 'sent',
          content: 'Lorem ipsum'
        },
        {
          type: 'sent',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds. Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem sdkfjlhseui fhuehakflhds '
        }
      ]
    },
    {
      id: 3,
      userName: 'Brad Marsh',
      tagline: 'last online 2 minutes',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl est, scelerisque eget ante id, congue condimentum urna. Vivamus hendrerit elit erat, id rutrum nulla pretium at. Nam auctor lorem eget metus consectetur, sit amet commodo ligula rutrum. Vestibulum pellentesque sed turpis ut ultrices. Donec egestas, velit nec aliquet ultrices, sem erat tempor mauris, eu placerat nunc neque ac odio. Nunc nulla enim, consectetur tempor libero et, tempor commodo nisi. Quisque sed magna non lectus aliquam efficitur ac et massa.',
      messages: [
        {
          type: 'sent',
          content: 'Lorem ipsum'
        },
        {
          type: 'sent',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds. Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem sdkfjlhseui fhuehakflhds '
        }
      ]
    },
    {
      id: 4,
      userName: 'Brad Marsh',
      tagline: 'last online 2 minutes',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl est, scelerisque eget ante id, congue condimentum urna. Vivamus hendrerit elit erat, id rutrum nulla pretium at. Nam auctor lorem eget metus consectetur, sit amet commodo ligula rutrum. Vestibulum pellentesque sed turpis ut ultrices. Donec egestas, velit nec aliquet ultrices, sem erat tempor mauris, eu placerat nunc neque ac odio. Nunc nulla enim, consectetur tempor libero et, tempor commodo nisi. Quisque sed magna non lectus aliquam efficitur ac et massa.',
      messages: [
        {
          type: 'sent',
          content: 'Lorem ipsum'
        },
        {
          type: 'sent',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds. Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem sdkfjlhseui fhuehakflhds '
        }
      ]
    },
    {
      id: 5,
      userName: 'Brad Marsh',
      tagline: 'last online 2 minutes',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl est, scelerisque eget ante id, congue condimentum urna. Vivamus hendrerit elit erat, id rutrum nulla pretium at. Nam auctor lorem eget metus consectetur, sit amet commodo ligula rutrum. Vestibulum pellentesque sed turpis ut ultrices. Donec egestas, velit nec aliquet ultrices, sem erat tempor mauris, eu placerat nunc neque ac odio. Nunc nulla enim, consectetur tempor libero et, tempor commodo nisi. Quisque sed magna non lectus aliquam efficitur ac et massa.',
      messages: [
        {
          type: 'sent',
          content: 'Lorem ipsum'
        },
        {
          type: 'sent',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds. Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem sdkfjlhseui fhuehakflhds '
        }
      ]
    },
    {
      id: 6,
      userName: 'Brad Marsh',
      tagline: 'last online 2 minutes',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl est, scelerisque eget ante id, congue condimentum urna. Vivamus hendrerit elit erat, id rutrum nulla pretium at. Nam auctor lorem eget metus consectetur, sit amet commodo ligula rutrum. Vestibulum pellentesque sed turpis ut ultrices. Donec egestas, velit nec aliquet ultrices, sem erat tempor mauris, eu placerat nunc neque ac odio. Nunc nulla enim, consectetur tempor libero et, tempor commodo nisi. Quisque sed magna non lectus aliquam efficitur ac et massa.',
      messages: [
        {
          type: 'sent',
          content: 'Lorem ipsum'
        },
        {
          type: 'sent',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds. Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem sdkfjlhseui fhuehakflhds '
        }
      ]
    },
    {
      id: 7,
      userName: 'Brad Marsh',
      tagline: 'last online 2 minutes',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl est, scelerisque eget ante id, congue condimentum urna. Vivamus hendrerit elit erat, id rutrum nulla pretium at. Nam auctor lorem eget metus consectetur, sit amet commodo ligula rutrum. Vestibulum pellentesque sed turpis ut ultrices. Donec egestas, velit nec aliquet ultrices, sem erat tempor mauris, eu placerat nunc neque ac odio. Nunc nulla enim, consectetur tempor libero et, tempor commodo nisi. Quisque sed magna non lectus aliquam efficitur ac et massa.',
      messages: [
        {
          type: 'sent',
          content: 'Lorem ipsum'
        },
        {
          type: 'sent',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds. Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem sdkfjlhseui fhuehakflhds '
        }
      ]
    },
    {
      id: 8,
      userName: 'Brad Marsh',
      tagline: 'last online 2 minutes',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl est, scelerisque eget ante id, congue condimentum urna. Vivamus hendrerit elit erat, id rutrum nulla pretium at. Nam auctor lorem eget metus consectetur, sit amet commodo ligula rutrum. Vestibulum pellentesque sed turpis ut ultrices. Donec egestas, velit nec aliquet ultrices, sem erat tempor mauris, eu placerat nunc neque ac odio. Nunc nulla enim, consectetur tempor libero et, tempor commodo nisi. Quisque sed magna non lectus aliquam efficitur ac et massa.',
      messages: [
        {
          type: 'sent',
          content: 'Lorem ipsum'
        },
        {
          type: 'sent',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds. Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'recieved',
          content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem sdkfjlhseui fhuehakflhds '
        },
        {
          type: 'sent',
          content: 'Lorem sdkfjlhseui fhuehakflhds '
        }
      ]
    },
 
  ],
  activeMessageIdx: null,
  error: null
};

export const Context = createContext(initialState);

export default function Store({children}) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
      <Context.Provider value={[state, dispatch]}>
          {children}
      </Context.Provider>
  )
};
