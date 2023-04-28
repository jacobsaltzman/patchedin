namespace :newsletter do
  desc "Sends welcome email to new subscribers"
  task send_welcome_email: :environment do
    require 'mail'
    require 'pg'
    
    # Connect to the PostgresQL database
    conn = PG.connect(dbname: ENV['DB_NAME'], user: ENV['DB_USER'], password: ENV['DB_PASSWORD'])
    
    # Retrieve the email addresses of all new subscribers
    result = conn.exec("SELECT email FROM subscribers WHERE sent_welcome_email = false")
    result.each do |row|
      email = row['email']
      mail = Mail.new do
        from    ENV['EMAIL']
        to      email
        subject 'Welcome to our newsletter!'
        body    'Thank you for subscribing to our newsletter.'
      end
      mail.deliver
      # Mark this subscriber as having received the welcome email
      conn.exec("UPDATE subscribers SET sent_welcome_email = true WHERE email = '#{email}'")
    end
    conn.close
  end
end