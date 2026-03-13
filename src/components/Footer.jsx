export default function Footer() {
	return (
		<>
			<footer className="bg-neutral-primary-soft rounded-base shadow-xs py-3">
				<div className="w-full mx-auto max-w-7xl flex p-4 flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
					<span className="text-sm text-body sm:text-center mx-auto">
						© 2026{" "}
						<a href="#" className="hover:underline">
							Shoppy Globe™
						</a>
						. All Rights Reserved.
					</span>
					<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0 mx-auto">
						<li>
							<a href="#" className="hover:underline me-4 md:me-6">
								About
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline me-4 md:me-6">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline me-4 md:me-6">
								Licensing
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</>
	)
}
