import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Beef - Premium Restaurant Next.js Template";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#050608",
					position: "relative",
				}}
			>
				{/* Gradient overlay */}
				<div
					style={{
						position: "absolute",
						inset: 0,
						background:
							"radial-gradient(ellipse at center, rgba(191,163,117,0.15) 0%, transparent 70%)",
						display: "flex",
					}}
				/>

				{/* Content */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						gap: 16,
						position: "relative",
					}}
				>
					{/* Subtitle */}
					<div
						style={{
							fontSize: 18,
							color: "#bfa375",
							letterSpacing: "0.2em",
							textTransform: "uppercase",
							fontWeight: 400,
						}}
					>
						Premium Restaurant Template
					</div>

					{/* Title */}
					<div
						style={{
							fontSize: 72,
							fontWeight: 700,
							color: "#ffffff",
							textTransform: "uppercase",
							letterSpacing: "0.05em",
							lineHeight: 1.1,
						}}
					>
						BEEF
					</div>

					{/* Divider */}
					<div
						style={{
							width: 80,
							height: 2,
							backgroundColor: "#bfa375",
							marginTop: 8,
							marginBottom: 8,
							display: "flex",
						}}
					/>

					{/* Tech badges */}
					<div
						style={{
							display: "flex",
							gap: 12,
							marginTop: 8,
						}}
					>
						{["Next.js 14", "TypeScript", "Tailwind CSS", "28+ Pages"].map(
							(badge) => (
								<div
									key={badge}
									style={{
										fontSize: 14,
										color: "#bfa375",
										border: "1px solid rgba(191,163,117,0.4)",
										borderRadius: 20,
										padding: "6px 16px",
										letterSpacing: "0.1em",
										textTransform: "uppercase",
									}}
								>
									{badge}
								</div>
							),
						)}
					</div>
				</div>

				{/* Footer */}
				<div
					style={{
						position: "absolute",
						bottom: 32,
						fontSize: 14,
						color: "rgba(255,255,255,0.4)",
						letterSpacing: "0.15em",
						display: "flex",
					}}
				>
					THEMEFOREST PREMIUM THEME
				</div>
			</div>
		),
		{ ...size },
	);
}
