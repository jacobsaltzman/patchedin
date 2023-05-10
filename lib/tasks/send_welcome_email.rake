namespace :newsletter do
  desc "Sends welcome email to new subscribers"
  task send_welcome_email: :environment do
    require 'mail'
    require 'pg'

    Mail.defaults do
      delivery_method :sendmail
    end
    
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

      begin
        mail.deliver
        conn.exec("UPDATE subscribers SET sent_welcome_email = true WHERE email = '#{email}'")
      rescue => e
        puts "Error delivering email to #{email}: #{e.message}"
        
      end
      
    end
    conn.close
  end
end