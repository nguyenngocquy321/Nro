import { Col, Container, Row } from 'react-bootstrap';
import TextInfoNickGame from '@components/layout/TextInfoNickGame/TextInfoNickGame';
import ReactPaginate from 'react-paginate';
import Breadcrumbs from '@components/common/Breadcrumbs/Breadcrumbs';
import ProductFilterForm from '@components/common/ProductFilterForm/ProductFilterForm';
import ItemsGame from '@components/layout/ItemsGame/ItemsGame';

function PackNickNgocRongVip() {
    return (
        <Container className='py-4'>
            <Breadcrumbs
                title={'NICK NGỌC RỒNG VIP'}
                desc={'NICK NGỌC RỒNG VIP'}
            />
            <TextInfoNickGame />
            <ProductFilterForm />
            <Row className='mt-3 mb-3'>
                <Col xs={12} md={6} lg={3} className='mb-3'>
                    <ItemsGame
                        src='https://s3.hcm-1.cloud.cmctelecom.vn/bannick/storage/imageacc/7bfe85bb6b8ae629e10d79d5766f25a7.jpg'
                        title='Nick Ngọc Rồng VIP 1'
                        card={1000000}
                        atm={1000000}
                        planed='Xayda'
                        server='1'
                        category='Ảo'
                    />
                </Col>

                <Col xs={12} md={6} lg={3} className='mb-3'>
                    <ItemsGame
                        src='https://s3.hcm-1.cloud.cmctelecom.vn/bannick/storage/imageacc/7bfe85bb6b8ae629e10d79d5766f25a7.jpg'
                        title='Nick Ngọc Rồng VIP 2'
                        card={1000000}
                        atm={1000000}
                        planed='Xayda'
                        server='1'
                        category='Ảo'
                    />
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <ItemsGame
                        src='https://s3.hcm-1.cloud.cmctelecom.vn/bannick/storage/imageacc/7bfe85bb6b8ae629e10d79d5766f25a7.jpg'
                        title='Nick Ngọc Rồng VIP 2'
                        card={1000000}
                        atm={1000000}
                        planed='Xayda'
                        server='1'
                        category='Ảo'
                    />
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <ItemsGame
                        src='https://s3.hcm-1.cloud.cmctelecom.vn/bannick/storage/imageacc/7bfe85bb6b8ae629e10d79d5766f25a7.jpg'
                        title='Nick Ngọc Rồng VIP 2'
                        card={1000000}
                        atm={1000000}
                        planed='Xayda'
                        server='1'
                        category='Ảo'
                    />
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <ItemsGame
                        src='https://s3.hcm-1.cloud.cmctelecom.vn/bannick/storage/imageacc/7bfe85bb6b8ae629e10d79d5766f25a7.jpg'
                        title='Nick Ngọc Rồng VIP 2'
                        card={1000000}
                        atm={1000000}
                        planed='Xayda'
                        server='1'
                        category='Ảo'
                    />
                </Col>
            </Row>
            <div className='d-flex justify-content-center mt-4'>
                <ReactPaginate
                    previousLabel={'←'}
                    nextLabel={'→'}
                    breakLabel={'...'}
                    pageCount={10}
                    forcePage={0}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    // onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                />
            </div>
        </Container>
    );
}

export default PackNickNgocRongVip;
