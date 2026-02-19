'use client';

export default function Preloader() {
	return (
		<div className="preloader" style={{ opacity: 0, display: 'none' }}>
			<div className="loader">
				<div className="spinner">
					<div className="spinner-container">
						<div className="spinner-rotator">
							<div className="spinner-left">
								<div className="spinner-circle" />
							</div>

							<div className="spinner-right">
								<div className="spinner-circle" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}