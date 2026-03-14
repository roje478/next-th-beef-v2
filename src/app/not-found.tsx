import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
	return (
		<section className="content-404">
			{/* Background */}
			<div className="content-404__background">
				<Image
					src="/bg/bg-cta.webp"
					alt="Premium dining experience background"
					width={1620}
					height={560}
					sizes="100vw"
				/>
			</div>
			{/* /Background */}
			{/* Content */}
			<div className="content-404__container">
				<div className="content-404__content">
					<h1 className="content-404__title">
						<Image
							src="/other/lemon.webp"
							alt="404 icon"
							width={600}
							height={300}
							sizes="(min-width: 768px) 50vw, 80vw"
							loading="lazy"
						/>
					</h1>
					<p>The page you are looking for has not been found.</p>
					<Link href="/" className="btn">
						Go to home
					</Link>
				</div>
			</div>
			{/* /Content */}
		</section>
	);
};

export default NotFoundPage;
