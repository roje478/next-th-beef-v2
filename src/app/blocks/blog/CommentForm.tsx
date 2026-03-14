const CommentForm = () => {
	return (
		<div className="comments__form" id="comment-form">
			<h3 className="comments-title">Post a comment</h3>
			<form className="form" action="/ruta-de-envio" method="post">
				<div className="form__body">
					<div className="form_row">
						<div className="form_field form_field__name">
							<label htmlFor="name">Name:</label>
							<input
								type="text"
								className="input"
								id="name"
								name="name"
								placeholder="Name"
							/>
						</div>
						<div className="form_field form_field__email">
							<label htmlFor="email">Email:</label>
							<input
								type="email"
								className="input"
								id="email"
								name="email"
								placeholder="Email"
							/>
						</div>
					</div>
					<div className="form_row">
						<div className="form_field form_field__message">
							<label htmlFor="message">Message:</label>
							<textarea
								className="input input-textarea"
								id="message"
								name="message"
								placeholder="Comments"
							></textarea>
						</div>
					</div>
				</div>
				<div className="form_footer">
					<div className="form_field">
						<button className="btn" type="submit" value="submit">
							Send
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CommentForm;
