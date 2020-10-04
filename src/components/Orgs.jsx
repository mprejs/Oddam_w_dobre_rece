import React from 'react';

const Orgs = ({ posts }) => {
  
  return (
    <ul className='whoWeHelpOrgList'>
      {posts.map(org => (
        <li key={org.id} className='orgListOrg'>
          <div className="orgListOrgDiscription">
            <div className='orgListName'>Fundacja "{org.name}"</div>
            <div className='orgListTarget'>Cel i misja: {org.target} </div>
          </div>
          <div className='orgListNeeds'> {org.needs} </div>
        </li>
      ))}
    </ul>
  );
};

export default Orgs;