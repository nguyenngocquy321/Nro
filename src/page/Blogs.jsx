import BreadCrumb from '@common/BreadCum/BreadCum';
import { Container } from 'react-bootstrap';
import ItemsBlog from '@components/ItemsBlog/ItemsBlog';
function Blogs() {
    return (
        <Container className='mt-5'>
            <div>
                <BreadCrumb title={'Blog - Tin Tức'} desc={'Blog - Tin Tức'} />
            </div>
            <div>
                <ItemsBlog />
            </div>
        </Container>
    );
}
export default Blogs;
