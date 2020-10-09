import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import HomeOrgList from './HomeOrgList';
import Pagination from './Pagination';
import Orgs from './Orgs'

const HomeWhoWeHelp = () => {
    const [orgKind, setOrgKind] = useState('fundations');
    const [orgList, setOrgList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [orgsPerPage] = useState(3);
    const [orgDiscription, setOrgDiscription] = useState('');

    const everyOrgKind = ['fundations', 'organizations', 'local'];
    const everyOrgList = HomeOrgList();

    useEffect (() => {
        const getOrgList = async () => {
            let temp = everyOrgList[everyOrgKind.indexOf(orgKind)];
            setOrgList([...temp.orgs]);
            setOrgDiscription(temp.discription)
        };
        getOrgList();
    }, [orgKind]); 

    const indexOfLastOrg = currentPage * orgsPerPage;
    const indexOfFirstOrg = indexOfLastOrg - orgsPerPage;
    const currentOrgs = orgList.slice(indexOfFirstOrg, indexOfLastOrg);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <Element name='HomeWhoWeHelp' className='homeWhoWeHelp'>
            <div className='whoWeHelpTitle mainText'> Komu pomagamy? </div>
            <div className='decorativeElement' />
            <ul className='whoWeHelpList'>
                <li 
                    className={`whoWeHelpOrgBtn whoWeHelpFundations ${(orgKind === 'fundations')?'orgActive':''}`} 
                    onClick={() => {setOrgKind('fundations'); setCurrentPage(1)}}
                >
                    Fundacjom
                </li>
                <li 
                    className={`whoWeHelpOrgBtn whoWeHelpOrganizations ${(orgKind === 'organizations')?'orgActive':''}`}
                    onClick={() => {setOrgKind('organizations'); setCurrentPage(1)}}    
                >
                    Organizacjom pozarządowym
                </li>
                <li 
                    className={`whoWeHelpOrgBtn whoWeHelpLocals ${(orgKind === 'local')?'orgActive':''}`}
                    onClick={() => {setOrgKind('local'); setCurrentPage(1)}}
                >
                    Lokalnym zbiórkom
                </li>
            </ul>
            <div className='whoWeHelpDisctirpion'>
                {orgDiscription}
            </div>
            <Orgs posts={currentOrgs} />
            <Pagination
                postsPerPage={orgsPerPage}
                totalPosts={orgList.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </Element>
    )
}

export default HomeWhoWeHelp;