import formatPeople from '../../utils/formatPeople';

import classes from './Table.module.css';

const Table = (props) => {
  const { people } = props;

  if (people.length === 0) {
    return <p className={classes.noPeopleMatch}>No matched people found </p>;
  }

  const formatData = formatPeople(people);

  const tableHead = Object.keys(formatData[0]);

  const tableBodyContent = formatData.map((person) => (
    <tr key={person.ID}>
      {Object.values(person).map((el, i) =>
        i === 0 ? (
          <td key={i} className={classes.avatar}>
            {' '}
            <img src={person.avatar} alt={person.name} />
          </td>
        ) : (
          <td key={i}>{el}</td>
        )
      )}
    </tr>
  ));

  return (
    <div className={classes.tableContainer}>
      <table className={classes.table} rules='none'>
        <thead>
          <tr>
            {tableHead.map((el, i) => (
              <th key={i}>{el}</th>
            ))}
          </tr>
        </thead>
        <tbody>{tableBodyContent}</tbody>
      </table>
    </div>
  );
};

export default Table;
