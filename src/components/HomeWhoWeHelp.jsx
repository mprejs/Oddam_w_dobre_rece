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

    const everyOrgKind = ['fundations', 'organizations', 'local'];
    const everyOrgList = HomeOrgList();

    useEffect (() => {
        const getOrgList = async () => {
            let temp = everyOrgList[everyOrgKind.indexOf(orgKind)];
            setOrgList([...temp.orgs]);
        }
        getOrgList();
    }, []); 

    // useEffect ( () => {
    //     const changeOrg = (org) => {
    //         setOrgKind('org');
    //     }
    //     changeOrg
    // } );

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
                    className='whoWeHelpOrgBtn whoWeHelpFundations' 
                    onClick={() => {setOrgKind('fundations'); console.log(orgKind)}}
                >
                    Fundacjom
                </li>
                <li 
                    className='whoWeHelpOrgBtn whoWeHelpOrganizations'
                    onClick={() => {setOrgKind('organizations'); console.log(orgKind)}}    
                >
                    Organizacjom pozarządowym
                </li>
                <li 
                    className='whoWeHelpOrgBtn whoWeHelpLocals'
                    onClick={() => {setOrgKind('local'); console.log(orgKind)}}
                >
                    Lokalnym zbiórkom
                </li>
            </ul>
            <div className='whoWeHelpDisctirpion'>
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </div>
            <Orgs posts={currentOrgs} />
            <Pagination
                postsPerPage={orgsPerPage}
                totalPosts={orgList.length}
                paginate={paginate}
            />
        </Element>
    )
}

export default HomeWhoWeHelp;