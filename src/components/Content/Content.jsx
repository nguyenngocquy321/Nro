import { Container } from 'react-bootstrap';
import styles from './styles.module.css';
import Products from '../Products/Products';
function Content() {
    const { textTitle, containerContent } = styles;
    return (
        <Container
            className={containerContent}
            style={{ marginTop: '100px', marginBottom: '100px' }}
        >
            <div className='content'>
                <div>
                    <div>
                        <h2 className={textTitle}>NICK GAME GIÁ RẺ</h2>
                    </div>
                    <div>
                        <Products />
                    </div>
                </div>
                <div className={containerContent}>
                    <div>
                        <h2 className={textTitle}>RANDOM CỰC HOT</h2>
                    </div>
                    <div>
                        <Products />
                    </div>
                </div>
                <div className={containerContent}>
                    <div>
                        <h2 className={textTitle}>NICK GAME GIÁ RẺ</h2>
                    </div>
                    <div>
                        <Products />
                    </div>
                </div>
            </div>
        </Container>
    );
}
export default Content;
