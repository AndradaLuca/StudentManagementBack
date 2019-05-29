package com.StudentManagement.repositories;

import com.sun.mail.smtp.SMTPTransport;
import java.security.Security;
import java.util.Date;
import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public abstract class MailRepository {

   // @Override
    public static void mail(String date, String mailAdress) {

        final String username = "ds.utcn@gmail.com";
        final String password = "facultate1";

        Properties props = new Properties();
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(username, password);
                    }
                });

        try {
            System.out.println(mailAdress);
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress("ds.utcn@gmail.com"));
            message.setRecipients(Message.RecipientType.TO,
                    InternetAddress.parse(mailAdress));
            message.setSubject("Planificare Sesiune");
            message.setText("Dear Prf,"
                    + "\n\n O sa trebuiasca sa fi prezent in data de " + date + " la facultate ca na!");

            Transport.send(message);

            System.out.println("Done");

        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }
}