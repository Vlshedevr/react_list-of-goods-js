import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const SORT_LENTGH = 'length';
const SORT_ALPHAVIT = 'alphavit';

function sortArray(array, sortType, reverse) {
  let goodsCopy = [...array];

  if (sortType) {
    goodsCopy.sort((good1, good2) => {
      switch (sortType) {
        case SORT_LENTGH:
          return good1.length - good2.length;

        case SORT_ALPHAVIT:
          return good1.localeCompare(good2);

        default:
          return 0;
      }
    });
  }

  if (reverse) {
    goodsCopy = goodsCopy.reverse();
  }

  return goodsCopy;
}

export const App = () => {
  const [nameSort, setNameSort] = useState('');
  const [arrRev, setarrRev] = useState(false);

  const readyArray = sortArray(goodsFromServer, nameSort, arrRev);

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={cn('button is-info', {
            'is-light': nameSort !== SORT_ALPHAVIT,
          })}
          onClick={() => {
            setNameSort(SORT_ALPHAVIT);
          }}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={cn('button is-success', {
            'is-light': nameSort !== SORT_LENTGH,
          })}
          onClick={() => {
            setNameSort(SORT_LENTGH);
          }}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={cn('button is-warning', {
            'is-light': arrRev !== true,
          })}
          onClick={() => {
            setarrRev(!arrRev);
          }}
        >
          Reverse
        </button>

        {(nameSort !== '' || arrRev !== false) && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => {
              setarrRev(false);
              setNameSort('');
            }}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {readyArray.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
