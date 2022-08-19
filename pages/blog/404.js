import styles from "../../styles/Home.module.scss";

export default function Custom404() {
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>404エラーだよ！</h1>
			<p className={styles.post}>ページがありません。</p>
		</main>
	);
}
