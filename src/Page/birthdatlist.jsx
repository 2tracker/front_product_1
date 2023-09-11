import React from 'react';
import Layout from '../component/common/Layout';
import BirthDayTable from '../component/common/DashBorad/BirthDayTable';

function Birthdatlist(props) {



    return (
        <div>
                    <Layout>
                        <div className='p-6'>

                    <BirthDayTable/>
                        </div>
                    </Layout>
        </div>
    );
}

export default Birthdatlist;