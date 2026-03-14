import Image from "next/image";
import Link from "next/link";

const ConfirmationPage = () => {
	return (
		<section className="confirmation">
			{/* Background */}
			<div className="confirmation__background">
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
			<div className="confirmation__container">
				<div className="confirmation__content">
					<h1 className="confirmation__title">Thank you!</h1>
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

export default ConfirmationPage;
